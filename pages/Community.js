// Importing necessary components and libraries from React Native
import { View, Text, ScrollView, Keyboard, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

// Importing utility functions and components
import getDocuments from '../util/GetAllusers'
import Loading from '../components/Loading'
import EmailWithat from '../util/EmailWithat'
import { useNavigation } from '@react-navigation/native'
import { getImageURL } from '../util/UploadImage'
import { useUser } from '../hooks/useUser'
import Animated from 'react-native-reanimated'
import { FadeInUp } from 'react-native-reanimated'

// Functional component for the Community screen
export default function Community({ SetKeyboard }) {
  const [Search, SetSearch] = useState('')
  const [Users, setUsers] = useState(null)

  useEffect(() => {
    // Event listeners for keyboard show and hide
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      SetKeyboard(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      SetKeyboard(false);
    });
    // Cleanup for event listeners
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  useEffect(()=>{
    // Fetching users data when the component mounts
    const getUsers = async () => {
      try {
        var allusers = await getDocuments();
        setUsers(allusers)
      } catch (error) {
        console.log(error)
      }
    }
    getUsers()
  },[])
  // If users data is not available, display loading component
  if (!Users) {
    return <Loading />
  }

  // Logging users data to console
  console.log(Users)

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center', marginTop: 50, padding: 10, width: '100%', gap: 10, paddingBottom: 50 }}>

      {/* Search input field */}
      <View style={{ flexDirection: 'row', gap: 5, width: '95%' }}>
        <TextInput value={Search} onChangeText={(e) => { SetSearch(e) }} style={{ borderWidth: 1, borderColor: 'black', padding: 10, width: '100%', borderRadius: 8, backgroundColor: '#D9D9D9', fontSize: 16 }} placeholder='Search' />
      </View>

      {/* Mapping through Users array and rendering UserPicture component */}
      {
        Users.map((e, i) => {
          return <UserPicture key={e.uid + i} e={e} Search={Search} />
        })
      }
    </ScrollView>
  )
}

// Functional component for rendering user information
const UserPicture = ({ e, Search }) => {
  const Navigate = useNavigation();
  const [ImageURI, setImage] = useState(null);
  const { firebase } = useUser()

  useEffect(() => {
    // Fetching user profile image
    const fetchImages = async () => {
      try {
        var Profile = await getImageURL('Profiles', e.profileIcon, firebase);
        setImage(Profile)
      } catch {
        setImage(null)
      }
    }
    fetchImages()
  }, [])

  // Formatting user's name based on whether it's available or not
  var usersName = e.name === '' ? EmailWithat(e.email) : e.name

  // Filtering users based on search input
  if (Search !== '' && !usersName.toLowerCase().includes(Search.toLowerCase())) {
    return null
  }

  // Function to navigate to user's profile screen
  const Click = () => {
    Navigate.navigate('Usersprofile', {
      uid: e.uid
    })
  }

  // Rendering user information with animation
  return <Animated.View entering={FadeInUp} style={{ width: '95%' }}>
    <TouchableOpacity style={{ backgroundColor: '#D9D9D9', padding: 25, borderRadius: 8, alignItems: 'center', flexDirection: 'row', gap: 10 }} onPress={Click}>
      <Image source={ImageURI} style={{ backgroundColor: '#D9D9D9', width: 50, height: 50, borderRadius: 50, borderWidth: 1, borderColor: 'black' }} />
      <View>
        <Text>{usersName}</Text>
        <Text>Future: {e.dreamjob}</Text>
      </View>
    </TouchableOpacity>
  </Animated.View>
}
