import { View, Text, TextInput,Keyboard, TouchableOpacity,ScrollView } from 'react-native'
import React, { useState,useEffect, useMemo } from 'react'
import { styles } from '../styles/Plusstyles';
import { FadeInDown } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import DropDown from '../components/DropDown';
import { useNavigation } from '@react-navigation/native';
import PlusSquare from '../components/PlusSquare';
export default function Plus({SetKeyboard}) {
 // State for search input
 const [Search, SetSearch] = useState('');
 // State for list style (Grid or List)
 const [ListStyle, setListStyle] = useState(2);
 // Navigation hook
 const Nav = useNavigation();
 // Memoized values for list type and check if it's a list
 const ListType = useMemo(() => {
   return ListStyle == 1 ? 'Grid' : 'List';
 }, [ListStyle]);
 const isList = useMemo(() => {
   return ListType === 'List';
 }, [ListStyle]);

 // Function to handle clicks on action items
 const HandleClick = (Value, Icon) => {
   console.log(Icon);
   Nav.navigate('editdetails', {
     edit: Value,
     icon: Icon,
   });
 }

 // Effect to handle keyboard visibility
 useEffect(() => {
   const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
     SetKeyboard(true);
   });
   const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
     SetKeyboard(false);
   });

   return () => {
     keyboardDidShowListener.remove();
     keyboardDidHideListener.remove();
   };
 }, []);

 // Return the UI components
  return (
    <ScrollView contentContainerStyle={styles.container}>


    <View style={styles.inputContainer}>
      <TextInput value={Search} onChangeText={(e)=>{SetSearch(e)}} style={styles.input} placeholder='Search'/>
      <DropDown setListStyle={setListStyle} ListStyle={ListStyle}/>
    </View>



    <Animated.View entering={FadeInDown} style={styles.animatedview}>
     <Text style={styles.header}>Actions</Text>
      <View style={styles.squareHolder}>

        <PlusSquare iconname={'star'} name={'Goal'} isList={isList} Search={Search} HandleClick={(iconname)=>{HandleClick('goals',iconname)}}/>
        <PlusSquare iconname={'paper-plane'} name={'Task'} isList={isList} Search={Search} HandleClick={(iconname)=>{HandleClick('tasks',iconname)}}/>

      </View> 
    </Animated.View>
    


    <Animated.View entering={FadeInDown} style={styles.animatedview}>
    <Text style={styles.header}>Personal</Text>

      <View style={styles.squareHolder}>

        <PlusSquare iconname={'network-wired'} name={'Skill'} isList={isList} Search={Search} HandleClick={(iconname)=>{HandleClick('skills',iconname)}}/>
        <PlusSquare iconname={'briefcase'} name={'Reference'} isList={isList} Search={Search} HandleClick={(iconname)=>{HandleClick('references',iconname)}}/>
        <PlusSquare iconname={'language'} name={'Language'} isList={isList} Search={Search} HandleClick={(iconname)=>{HandleClick('languages',iconname)}}/>
      
      </View> 
</Animated.View>
    


      <Animated.View entering={FadeInDown} style={styles.animatedview}>
    <Text style={styles.header}>Social</Text>

    <View style={styles.squareHolder}> 
        <PlusSquare iconname={'link'} name={'Link'} isList={isList} Search={Search} HandleClick={(iconname)=>{HandleClick('otherLinks',iconname)}}/>
    </View> 
</Animated.View>
    

    <Animated.View entering={FadeInDown} style={styles.animatedview}>
    <Text style={styles.header}>Education</Text>
    <View style={styles.squareHolder}>
         <PlusSquare iconname={'award'} name={'Award'} isList={isList} Search={Search} HandleClick={(iconname)=>{HandleClick('awards',iconname)}}/>
         <PlusSquare iconname={'desktop'} name={'Class'} isList={isList} Search={Search} HandleClick={(iconname)=>{HandleClick('coursesTaken',iconname)}}/> 
    </View> 
</Animated.View>
    
    <Animated.View entering={FadeInDown} style={styles.animatedview}>
    <Text style={styles.header}>Certifications</Text>
    <View style={styles.squareHolder}>
         <PlusSquare iconname={'address-card'} name={'License'} isList={isList} Search={Search} HandleClick={(iconname)=>{HandleClick('licenses',iconname)}}/>
    </View> 
</Animated.View>
    

    <Animated.View entering={FadeInDown} style={styles.animatedview}>
    <Text style={styles.header}>Extracurricular</Text>
    <View style={styles.squareHolder}>
         <PlusSquare iconname={'running'} name={'Sport'} isList={isList} Search={Search} HandleClick={(iconname)=>{HandleClick('sports',iconname)}}/>
         <PlusSquare iconname={'people-arrows'} name={'Club'} isList={isList} Search={Search} HandleClick={(iconname)=>{HandleClick('clubs',iconname)}}/>
    </View> 
</Animated.View>
    


    <Animated.View entering={FadeInDown} style={styles.animatedview}>
    <Text style={styles.header}>Work</Text>
    <View style={styles.squareHolder}>
         <PlusSquare iconname={'truck-moving'} name={'Experience'} isList={isList} Search={Search} HandleClick={(iconname)=>{HandleClick('experiences',iconname)}}/>
         <PlusSquare iconname={'globe-asia'} name={'Internship'} isList={isList} Search={Search} HandleClick={(iconname)=>{HandleClick('internships',iconname)}}/>
    </View> 
</Animated.View>
    

    <Animated.View entering={FadeInDown} style={styles.animatedview}>
    <Text style={styles.header}>Community</Text>
    <View style={styles.squareHolder}>
         <PlusSquare iconname={'fist-raised'} name={'Hours'} isList={isList} Search={Search} HandleClick={(iconname)=>{HandleClick('communityService',iconname)}}/>
    </View> 
</Animated.View>
    
    <Text style={[styles.header,{marginBottom:350}]}></Text>


    </ScrollView>
  )
}


