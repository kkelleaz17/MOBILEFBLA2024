import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import CheckBoxIcon from 'react-native-elements/dist/checkbox/CheckBoxIcon';
import { styles } from '../styles/Loginstyles'; // Update the import statement
import Input from '../components/Input';
import { validateEmail, validatePassword } from '../util/Validation';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../components/Loading';
import UserSchema from '../util/UserSchema'
import { useUser } from '../hooks/useUser';

export default function Login() {
  const Nav = useNavigation();

  // State for user information
  const [userInfo, setUserInfo] = useState({
    Email: '',
    Password: '',
    Remember: false,
    tryLogin: false
  });

  // State for checking if remembered user is loading
  const [CheckRemembered, setIsRemembered] = useState(true)

  // Destructuring hooks from the custom hook
  const { auth, setLoading, setUser, setError, setArrayQuestion } = useUser();

  // State to track keyboard visibility
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  // Handler for input change
  const handleChange = (name, text) => {
    setUserInfo(prev => ({ ...prev, [name]: text }));
  };

  // Effect to retrieve data from AsyncStorage on component mount
  useEffect(() => {
    retrieveData()
  }, []);

  // Function to retrieve user data from AsyncStorage
  const retrieveData = async () => {
    try {
      setLoading(true)
      const value1 = await AsyncStorage.getItem('Email');
      const value2 = await AsyncStorage.getItem('Password');

      if (value1 !== null && value2 !== null) {
        setUserInfo({
          Email: value1,
          Password: value2,
          Remember: true,
          tryLogin: true
        });
      } else {
        console.log('One or both values not found.');
        setIsRemembered(false)
        setLoading(false)
      }
    } catch (error) {
      console.error('Error retrieving data: ', error);
    }
  };

  // Function to save user data to AsyncStorage
  const saveData = async () => {
    try {
      const key1 = 'Email';
      const value1 = userInfo.Email;

      const key2 = 'Password';
      const value2 = userInfo.Password;

      await AsyncStorage.setItem(key1, value1);
      await AsyncStorage.setItem(key2, value2);

      console.log('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data: ', error);
    }
  };

  // Effect to handle keyboard visibility
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false);
    });
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  // Validation checks for email and password
  const ValidEmail = validateEmail(userInfo.Email);
  const ValidPassword = validatePassword(userInfo.Password);

  // Handle normal login with email and password
  const HandleNormalLogin = async () => {
    try {
      Keyboard.dismiss();
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, userInfo.Email, userInfo.Password);
      const { uid, email } = result.user;

      // Initialize Firestore
      const db = getFirestore();
      const myCollection = collection(db, 'userData');
      const docRef = doc(myCollection, uid);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        setUser({ ...data, ...{ uid, email } });
      } else {
        setArrayQuestion({
          show: true,
          start: 0,
          end: 7,
          type: 'create',
        });
        setUser({ ...UserSchema, ...{ uid, email } });
      }

      // Save data if "Remember Me" is checked
      if (userInfo.Remember) {
        saveData()
      }

      // Navigate to home screen
      Nav.navigate('home');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Effect to automatically attempt login if tryLogin is true
  useEffect(() => {
    if (userInfo.tryLogin) {
      HandleNormalLogin()
    }
  }, [userInfo.tryLogin])

  // Show loading screen if remembered user is still loading
  if (CheckRemembered) {
    return <Loading />
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container}>
        <Image source={require('../assets/fbla20only.png')} style={styles.logo} />

        {/* Input fields for email and password */}
        <Input onchange={(text) => handleChange('Email', text)} value={userInfo.Email} label={'Email'} error={ValidEmail} type={false}/>
        <Input onchange={(text) => handleChange('Password', text)} value={userInfo.Password} label={'Password'} error={ValidPassword} type={true}/>

        {/* Checkbox for "Remember Me" */}
        <TouchableOpacity style={styles.checkboxContainer} onPress={() => { handleChange('Remember', !userInfo.Remember); }} >
          <>
            <CheckBoxIcon checked={userInfo.Remember} />
            <Text>Remember me</Text>
          </>
        </TouchableOpacity>

        {/* Button to initiate login */}
        <TouchableOpacity style={styles.loginButton} onPress={HandleNormalLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Conditional rendering for sign-up link */}
        {!isKeyboardVisible && (
          <TouchableOpacity style={styles.signUpContainer} onPress={() => { Nav.navigate('signup'); }}>
            <Text style={styles.signUpText}>Don't have an account? Sign Up!</Text>
          </TouchableOpacity>
        )}

      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
