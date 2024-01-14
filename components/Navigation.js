// Import necessary React and React Navigation components
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Navbar from './Navbar';

// Import your pages/components
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Terms from '../pages/Terms';
import Home from '../pages/Home';
import { useUser } from '../hooks/useUser';
import Plus from '../pages/Plus';
import Community from '../pages/Community';
import Profile from '../pages/Profile';
import EditDetails from '../pages/EditDetails';
import News from '../pages/News';

// Create a Stack Navigator
const Stack = createStackNavigator();

// Main Navigation Component
export default function Navigation() {
  const { user } = useUser();
  const isLoggedIn = !!user; // Check if user is logged in

  // Common navigation options
  const options = {
    headerShown: false,
  };

  // Define different page components
  const HomePage = () => {
    return (
      <>
        <Home />
        <Navbar />
      </>
    );
  };

  const NewsPage = () => {
    return (
      <>
        <News />
        <Navbar />
      </>
    );
  };

  const CommunityPage = () => {
    const [isKeyBoard, SetKeyboard] = useState(false);
    return (
      <>
        <Community SetKeyboard={SetKeyboard} />
        {!isKeyBoard && <Navbar />}
      </>
    );
  };

  const ProfilePage = () => {
    return (
      <>
        <Profile />
        <Navbar />
      </>
    );
  };

  const PlusPage = () => {
    const [isKeyBoard, SetKeyboard] = useState(false);
    return (
      <>
        <Plus SetKeyboard={SetKeyboard} />
        {!isKeyBoard && <Navbar />}
      </>
    );
  };

  // Set initial route based on whether the user is logged in or not
  const initialRouteName = isLoggedIn ? 'home' : 'login';

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      {/* Define each screen in the navigator */}
      <Stack.Screen name={'home'} component={HomePage} options={options} />
      <Stack.Screen name={'community'} component={CommunityPage} options={options} />
      <Stack.Screen name={'plus'} component={PlusPage} options={options} />
      <Stack.Screen name={'editdetails'} component={EditDetails} options={options} />
      <Stack.Screen name={'news'} component={NewsPage} options={options} />
      <Stack.Screen name={'profile'} component={ProfilePage} options={options} />
      <Stack.Screen name={'Usersprofile'} component={ProfilePage} options={options} />
      {!isLoggedIn && <>
        {/* If not logged in, include login and signup screens */}
        <Stack.Screen name={'login'} component={Login} options={options} />
        <Stack.Screen name={'signup'} component={SignUp} options={options} />
      </>}
      <Stack.Screen name={'terms'} component={Terms} options={options} />
    </Stack.Navigator>
  );
}
