// Import necessary modules and components from React, React Native, and other libraries
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import uuid from 'react-native-uuid';
import { useUser } from '../hooks/useUser';
import { Keyboard } from 'react-native';

// Import custom components
import CourceCompoenent from '../components/CourceComponent';
import BaseComponent from '../components/BaseComponent';
import SmallCOmpoenent from '../components/SmallComponent';
import WorkComponent from '../components/WorkComponent';

// Define the EditDetails functional component
export default function EditDetails() {
  // Retrieve parameters from the route and set up navigation
  const { params } = useRoute();
  const { edit: nav, icon: icons } = params || {};
  const navigation = useNavigation();
  
  // State to track the keyboard visibility
  const [isKeyBoard, SetKeyboard] = useState(false);

  // Custom hook to save user data
  const { save } = useUser();

  // Effect to add listeners for keyboard show and hide events
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      SetKeyboard(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      SetKeyboard(false);
    });

    // Clean up listeners on component unmount
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  // Render the main view with specific components based on the navigation parameter
  return (
    <>
      <ScrollView contentContainerStyle={{ alignItems: 'center', marginTop: 10, padding: 10, width: '100%', gap: 10, paddingBottom: 350 }}>
        {/* Display the section title and icon */}
        <Text style={{ width: '95%', fontSize: 25, marginTop: 10 }}>{nav?.charAt(0).toUpperCase() + nav?.slice(1)} <FontAwesome5 name={icons} size={25} /></Text>
        
        {/* Render specific components based on the navigation parameter */}
        {nav === 'goals' && <GoalsComponent />}
        {nav === 'tasks' && <TasksComponent />}
        {nav === 'experiences' && <ExperienceComponent />}
        {nav === 'internships' && <InternshipsComponent />}
        {nav === 'communityService' && <CommunityComponent />}
        {nav === 'sports' && <SportsComponent />}
        {nav === 'clubs' && <ClubsComponent />}
        {nav === 'licenses' && <LicenseComponent />}
        {nav === 'otherLinks' && <OtherLinksComponent />}
        {nav === 'references' && <ReferencesComponent />}
        {nav === 'skills' && <SkillsComponent />}
        {nav === 'awards' && <AwardsComponent />}
        {nav === 'languages' && <LanguagesComponent />}
        {nav === 'coursesTaken' && <ClassCompoenent />}
      </ScrollView>
      
      {/* Display the "Complete" button if the keyboard is not visible */}
      {!isKeyBoard &&
        <View style={{ width: '100%', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
          {/* Button to complete and save the changes */}
          <TouchableOpacity style={{ backgroundColor: '#1c99af', padding: 15, width: '95%', height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }} onPress={() => { navigation.goBack(); save(); }}>
            <Text style={{ color: 'white' }}>Complete</Text>
          </TouchableOpacity>
        </View>}
    </>
  );
}

// Define separate functional components for each type of content
const GoalsComponent = () => <BaseComponent type="goals" prop="goal" />;
const TasksComponent = () => <BaseComponent type="tasks" prop="task" />;
const ExperienceComponent = () => <WorkComponent type="experiences" prop="experience" />;
const InternshipsComponent = () => <WorkComponent type="internships" prop="internships" />;
const CommunityComponent = () => <WorkComponent type="communityService" prop="community event" />;
const SportsComponent = () => <SmallCOmpoenent type="sports" prop="sport" />;
const ClubsComponent = () => <SmallCOmpoenent type="clubs" prop="club" />;
const LicenseComponent = () => <SmallCOmpoenent type="licenses" prop="license" />;
const OtherLinksComponent = () => <SmallCOmpoenent type="otherLinks" prop="link" />;
const ReferencesComponent = () => <SmallCOmpoenent type="references" prop="reference" />;
const SkillsComponent = () => <SmallCOmpoenent type="skills" prop="skill" />;
const AwardsComponent = () => <SmallCOmpoenent type="awards" prop="award" />;
const LanguagesComponent = () => <SmallCOmpoenent type="languages" prop="language" />;
const ClassCompoenent = () => <CourceCompoenent type="coursesTaken" prop="Cource" />;
