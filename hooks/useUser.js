// Import necessary React components and functions
import React, { useContext, createContext, useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import { getFirestore, updateDoc, doc, collection, addDoc, setDoc } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import firebaseConfig from '../FireBaseConfig';
import ErrorBox from '../components/ErrorBox';
import { View } from 'react-native';
import ArrayPopUp from '../components/ArrayPopUp';
import FetchNews from '../util/Instagram';

// Create a context to manage user information
const UserContext = createContext(null);

// Main component for managing user information
function UserInformation(props) {
  // State variables for user information, loading status, Firebase, Firestore, authentication, error, news, and array questions
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [firebase, setFirebase] = useState(null);
  const [firestore, setFirestore] = useState(null);
  const [Auth, setAuth] = useState(null);
  const [error, setError] = useState('');
  const [News, setNews] = useState(null);
  const [ArrayQuestion, setArrayQuestion] = useState({
    show: false,
    start: 0,
    end: 0
  });

  // Function to fetch news
  const GetNews = async () => {
    setLoading(true);
    try {
      var news = await FetchNews();
      setNews(news);
    } catch {
      setNews([]);
    } finally {
      setLoading(false);
    }
  };

  // Effect hook to fetch news on component mount
  useEffect(() => {
    GetNews();
  }, []);

  // Effect hook to initialize Firebase
  useEffect(() => {
    const FireBaseInitialize = async () => {
      try {
        setLoading(true);

        // Check if Firebase is already initialized
        if (!getApps().length) {
          const app = initializeApp(firebaseConfig);
          const auth = initializeAuth(app, {
            persistence: getReactNativePersistence(ReactNativeAsyncStorage)
          });

          setAuth(auth);
          setFirebase(app);
        } else {
          const app = getApp(); // Get the existing app instance
          const auth = getAuth(app); // Get the existing auth instance
          setAuth(auth);
          setFirestore(getFirestore(app));
          setFirebase(app);
        }
      } catch (error) {
        console.error('Error initializing Firebase:', error);
      } finally {
        setLoading(false);
      }
    };

    FireBaseInitialize();
  }, []);

  // Function to save user data to Firestore
  const save = async () => {
    const db = getFirestore(firebase);
    const documentRef = doc(db, 'userData', user.uid);
    setLoading(true);
    try {
      await updateDoc(documentRef, user);
      setLoading(false);
    } catch (error) {
      setError('Error updating document: ', error);
      setLoading(false);
    }
  };

  // Function to save big values to Firestore
  const saveBigValues = async (NewValues) => {
    const db = getFirestore(firebase);
    const documentRef = doc(db, 'userData', user.uid);
    var savingValue = { ...user, ...NewValues };
    setUser(savingValue)
    try {
      await updateDoc(documentRef, savingValue);
    } catch (error) {
      setError('Error updating document: ', error);
    }
  };

  // Function to create a new document in Firestore
  const createdoc = async (QuestionValues) => {
    setUser((prev) => {
      return { ...prev, ...QuestionValues };
    });

    const db = getFirestore(firebase);
    const userData = collection(db, 'userData');

    try {
      const userDocRef = doc(userData, user.uid);
      await setDoc(userDocRef, { ...user, ...QuestionValues }, { merge: true });

      return userDocRef.id; // Assuming you want to return the document ID
    } catch (error) {
      console.error('Error setting document: ', error);
    }
  };

  // Context value containing user information and related functions
  const value = {
    user: user,
    setUser: setUser,
    setLoading: setLoading,
    firebase: firebase,
    auth: Auth,
    setError: setError,
    setArrayQuestion: setArrayQuestion,
    firestore: firestore,
    news: News,
    save: save,
    saveBigValues: saveBigValues
  };

  // Log error if present and render the components
  if (error) {
    console.log(error);
  }

  return (
    <UserContext.Provider value={value}>
      {props.children}
      {loading && <Loading />}
      {error && <ErrorBox error={error} Close={() => { setError('') }} />}
      {ArrayQuestion.show && <ArrayPopUp value={ArrayQuestion} Close={() => { setArrayQuestion('') }} user={user} createDoc={createdoc} saveBigValues={saveBigValues} />}
    </UserContext.Provider>
  );
}

// Custom hook to access the UserContext
function useUser() {
  const context = useContext(UserContext);

  return context;
}

// Export the custom hook and the UserInformation component
export { useUser, UserInformation };
