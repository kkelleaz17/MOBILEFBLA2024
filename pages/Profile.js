import { View, Text,Image,TouchableOpacity ,ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import {  useRoute } from '@react-navigation/native';
import { useUser } from '../hooks/useUser';
import EmailWithat from '../util/EmailWithat';
import { Button } from 'react-native-elements';
import { getFirestore, collection,doc,getDoc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DevSettings } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { UploadFiles, getImageURL } from '../util/UploadImage';
import Loading from '../components/Loading';
import WorkSection from '../components/WorkSection';
import OtherSection from '../components/OtherSection';
import convertToBlob from '../util/convertToBlob';
import styles from '../styles/ProfileStyle'
// Define the main Profile component
export default function Profile() {
  // Destructure params from useRoute
  const { params } = useRoute();
  // Destructure user related functions and objects from useUser
  const { user, setUser, setArrayQuestion, firebase, saveBigValues } = useUser();
  // Extract uid from params
  const Id = params.uid;
  // State for editing mode
  const [Editing, setEditing] = useState(false);
  // State to store current user details
  const [CurrentUser, SetCurrentUser] = useState(null);
  // State to handle loading state
  const [LoadingState, setLoading] = useState(false);
  // State to store selected profile and background pictures
  const [SelectedPictures, SetSelected] = useState({
    ProfilePicture: null,
    BackPicture: null,
  });

  // Function to sign out user
  const SignOut = async () => {
    try {
      // Specify the keys of the values you want to delete
      const keysToDelete = ['Email', 'Password'];

      // Delete values asynchronously
      await AsyncStorage.multiRemove(keysToDelete);
      DevSettings.reload();
      console.log('Data deleted successfully!');
    } catch (error) {
      console.error('Error deleting data: ', error);
    }
  };

  // Check if the current user can edit the profile
  const canEdit = Id == user?.uid;

  // useEffect to fetch and set user profile details
  useEffect(() => {
    const GetUserIDProfile = async () => {
      if (canEdit) {
        // Fetch profile details for the logged-in user
        var Pictures = {
          ProfilePicture: await getImageURL('Profiles', user.profileIcon, firebase),
          BackPicture: await getImageURL('ProfileBackGrounds', user.profileBackground, firebase),
        }
        SetCurrentUser(user)
        SetSelected(Pictures)
        return;
      }
      const db = getFirestore();
      const myCollection = collection(db, 'userData');

      // Use the doc function to directly reference the document by ID
      try {
        const docRef = doc(myCollection, Id);
        console.log('finding user: ' + Id)
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          var Pictures = {
            ProfilePicture: await getImageURL('Profiles', data.profileIcon, firebase),
            BackPicture: await getImageURL('ProfileBackGrounds', data.profileBackground, firebase),
          }
          SetSelected(Pictures);
          SetCurrentUser({ ...data });
        }

      } catch (err) {
        console.log(err);
      }
    }
    GetUserIDProfile()
  }, [])

  // Render loading component if user details are not available
  if (!CurrentUser || LoadingState) {
    return <Loading />
  }

  // Function to start editing based on the provided range
  const StartEdit = (start, end) => {
    if (!canEdit) return;
    setArrayQuestion({
      show: true,
      start: start,
      end: end,
      type: 'update',
    })
  }

  // Component to render edit icon based on user's ability to edit
  const EditIcon = () => {
    if (canEdit) {
      return <FontAwesome5 name="edit" size={15} color="black" />
    }
    return null
  }



  // Component to render profile picture with edit functionality
  const ProfilePicture = () => {
    if (canEdit) {
      return (
        <TouchableOpacity style={styles.profilePictureContainer} onPress={() => { pickImage('ProfilePicture', [3, 3]) }}>
          <Image source={SelectedPictures.ProfilePicture} style={styles.profilePicture} />
          <View style={styles.editIconContainer}><FontAwesome5 name="edit" size={25} color="black" /></View>
        </TouchableOpacity>
      );
    } else {
      return <Image source={SelectedPictures.ProfilePicture} style={styles.profilePicture} />;
    }
  }

  // Component to render profile background with edit functionality
  const ProfileBackGround = () => {
    if (canEdit) {
      return (
        <TouchableOpacity onPress={() => { pickImage('BackPicture', [4, 3]) }}>
          <Image source={SelectedPictures.BackPicture} style={styles.profileBackground} />
          <View style={styles.editIconContainerback}><FontAwesome5 name="edit" size={25} color="black" /></View>
        </TouchableOpacity>
      );
    } else {
      return <Image source={SelectedPictures.BackPicture} style={styles.profileBackground} />;
    }
  }

  // Function to pick an image
  const pickImage = async (ImageValue, aspect) => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({ //// semmes to fail heere
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        allowsMultipleSelection: false,
        canceled: true,
        aspect: aspect,
      });
      if (!result.canceled) {
        setEditing(true);
        SetSelected((prev) => {
          return { ...prev, [ImageValue]: result.assets[0] };
        });
      }
    } catch (error) {
      console.log('Error while picking image:', error);
    }
  };
  
  // Function to save selected pictures
  const SavePictures = async () => {
    try {
      // Convert images to Blobs
      setLoading(true)

      const TryProfileUpload = async () => {
        try {
          const profileBlob = await convertToBlob(SelectedPictures.ProfilePicture.uri);
          const profileIcon = await UploadFiles(profileBlob, 'Profiles', firebase);
          setUser((prev) => {
            return { ...prev, profileIcon };
          });
          return profileIcon
        } catch {

        }
      }
      const TryBackUpload = async () => {
        try {
          const backBlob = await convertToBlob(SelectedPictures.BackPicture.uri);
          const profileBackground = await UploadFiles(backBlob, 'ProfileBackGrounds', firebase);
          setUser((prev) => {
            return { ...prev, profileBackground };
          });
          return profileBackground
        } catch {

        }
      }

      const profileIcon = await TryProfileUpload()
      const profileBackground = await TryBackUpload()

      setEditing(false);

      await saveBigValues({ profileBackground, profileIcon });
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false)
    }
  };

  // Component to render top area of the profile
  const TopArea = () => {
    return (
      <View style={styles.topAreaContainer}>
        <ProfileBackGround />
        <View style={styles.profileDetailsContainer}>
          <ProfilePicture />
          <Text style={styles.nameText} onPress={() => { StartEdit(0, 0) }}>{CurrentUser.name === '' ? EmailWithat(CurrentUser.email) : CurrentUser.name} <EditIcon /></Text>
          <Text style={styles.otherDetailsText} onPress={() => { StartEdit(6, 6) }}>Future {CurrentUser.dreamjob || 'NA'} <EditIcon /></Text>
          <Text style={styles.otherDetailsText} onPress={() => { StartEdit(2, 2) }}>Born: {CurrentUser.dateOfBirth || 'NA'} <EditIcon /></Text>
          <Text style={styles.otherDetailsText} onPress={() => { StartEdit(4, 4) }}>Gender: {CurrentUser.gender || 'NA'} <EditIcon /></Text>
          <Text style={styles.otherDetailsText} onPress={() => { StartEdit(7, 7) }}>See more at {CurrentUser.personalWebsite || 'NA'} <EditIcon /></Text>
        </View>
      </View>
    );
  }
  // Component to render all user school information on the profile
  const EducationSection =()=>{
    return (
      <>
        <View style={{backgroundColor: '#D9D9D9',position:'relative',minHeight:100,padding:20,paddingVertical:50,borderRadius:8,width:'95%'}}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>School Information</Text>
          <Text style={{fontSize:15}} onPress={()=>{StartEdit(1,1)}}>Name: {CurrentUser.school || 'NA'} <EditIcon /></Text>
          <Text style={{fontSize:15}} onPress={()=>{StartEdit(5,5)}}>GPA: {CurrentUser.GPA || 'NA'} <EditIcon /></Text>
           <Text style={{fontSize:15}} onPress={()=>{StartEdit(3,3)}}>Grade: {CurrentUser.grade || 'NA'} <EditIcon /></Text>
        </View>

        {CurrentUser.coursesTaken.length !== 0 && 
        <View style={{width:'95%',gap:10}}>
          <Text style={{width:'100%',fontWeight:'bold',fontSize:18}}>Courses</Text>
        <ScrollView contentContainerStyle={{alignItems:'center',flexDirection:'row',gap:10,minWidth:'95%'}} horizontal>
        
          {CurrentUser.coursesTaken.map(e=>{
            return <View style={{ backgroundColor: '#D9D9D9', padding: 25, borderRadius: 8, alignItems: 'center', flexDirection: 'row',justifyContent:'center' }} key={e.id}>
               <View>
                 <Text style={{ fontSize: 18 }}>{e.Cource}</Text>
                 <Text style={{ fontSize: 12 }}>{e.CourceType}</Text>
               </View>
             </View>
          })}
        </ScrollView></View>}
        
        {CurrentUser.awards.length !== 0 && 
        <View style={{width:'95%',gap:10}}>
          <Text style={{width:'100%',fontWeight:'bold',fontSize:18}}>Awards</Text>
        <ScrollView contentContainerStyle={{alignItems:'center',flexDirection:'row',gap:10,minWidth:'95%'}} horizontal>
        
          {CurrentUser.awards.map(e=>{
            return <View style={{ backgroundColor: '#D9D9D9', padding: 25, borderRadius: 8, alignItems: 'center', flexDirection: 'row',justifyContent:'center' }} key={e.id}>
                 <Text style={{ fontSize: 18 }}>{e.award}</Text> 
             </View>
          })}
        </ScrollView></View>}

        {[...CurrentUser.sports,...CurrentUser.clubs].length !== 0 && 
        <View style={{width:'95%',gap:10}}>
          <Text style={{width:'100%',fontWeight:'bold',fontSize:18}}>Extracurricular</Text>
        <ScrollView contentContainerStyle={{alignItems:'center',flexDirection:'row',gap:10,minWidth:'95%'}} horizontal>
        
          {[...CurrentUser.sports,...CurrentUser.clubs].map(e=>{
            return <View style={{ backgroundColor: '#D9D9D9', padding: 25, borderRadius: 8, alignItems: 'center', flexDirection: 'row',justifyContent:'center' }} key={e.id}>
                 <Text style={{ fontSize: 18 }}>{e?.club || e?.sport}</Text> 
             </View>
          })}
        </ScrollView></View>}
      </>
    )
  }

  // Render the profile component
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <TopArea />
      <View style={styles.saveButtonContainer}>
        {Editing && <Button title={'Save'} onPress={SavePictures} />}
      </View>
      <EducationSection />
      <WorkSection CurrentUser={CurrentUser} />
      <OtherSection CurrentUser={CurrentUser} />
      <View style={styles.saveButtonContainer}>
        {canEdit && <Button title={'Sign Out'} onPress={SignOut} />}
      </View>
    </ScrollView>
  )
}
