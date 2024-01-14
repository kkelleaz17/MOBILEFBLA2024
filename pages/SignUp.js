import React, { useEffect, useMemo, useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import CheckBoxIcon from 'react-native-elements/dist/checkbox/CheckBoxIcon';
import { styles } from '../styles/Loginstyles'; 
import Input from '../components/Input';
import { validateEmail, validatePassword } from '../util/Validation';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import UserSchema from '../util/UserSchema';
import { useUser } from '../hooks/useUser';

export default function SignUp() {
  const Nav = useNavigation();

  // State for user information
  const [userInfo, setUserInfo] = useState({
    Email: '',
    Password: '',
    Terms: false,
  });

  // Destructuring hooks from the custom hook
  const { auth, setLoading, setUser, User, setError, setArrayQuestion } = useUser();

  // State to track keyboard visibility
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  // Handler for input change
  const handleChange = (name, text) => {
    setUserInfo(prev => ({ ...prev, [name]: text }));
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

  // Handle sign up with email and password
  const HandleNormalSignIn = async () => {
    try {
      setLoading(true);

      // Check for acceptance of terms
      if (!userInfo.Terms) {
        throw new Error('Terms Not Accepted');
      } else if (ValidEmail) {
        throw new Error(ValidEmail);
      } else if (ValidPassword) {
        throw new Error(ValidPassword);
      }

      // Create user with Firebase authentication
      const result = await createUserWithEmailAndPassword(auth, userInfo.Email, userInfo.Password);
      const user = result.user;

      // Update user information in the state
      setUser({ ...UserSchema, email: userInfo.Email, uid: user.uid });

      // Set array question details
      setArrayQuestion({
        show: true,
        start: 0,
        end: 7,
        type: 'create',
      });

      // Navigate to home screen
      Nav.navigate('home');
    } catch (err) {
      setError(err.message); // Set the error message to your state or variable
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container}>
        <Image source={require('../assets/fbla20only.png')} style={styles.logo} />

        {/* Input fields for email and password */}
        <Input onchange={(text) => handleChange('Email', text)} value={userInfo.Email} label={'Email'} error={ValidEmail} type={false}/>
        <Input onchange={(text) => handleChange('Password', text)} value={userInfo.Password} label={'Password'} error={ValidPassword} type={true}/>

        {/* Checkbox for accepting terms */}
        <TouchableOpacity style={styles.checkboxContainer} onPress={() => { handleChange('Terms', !userInfo.Terms); }}>
          <>
            <CheckBoxIcon checked={userInfo.Terms} />
            <Text>
              I have read and agree to the <Text style={{ textDecorationLine: 'underline' }} onPress={() => { Nav.navigate('terms'); }}>Terms of Service</Text>.
            </Text>
          </>
        </TouchableOpacity>

        {/* Button to sign up */}
        <TouchableOpacity style={styles.loginButton} onPress={HandleNormalSignIn}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Conditional rendering for login link */}
        {!isKeyboardVisible && (
          <TouchableOpacity style={styles.signUpContainer} onPress={() => { Nav.navigate('login'); }}>
            <Text style={styles.signUpText}>have an account? Login!</Text>
          </TouchableOpacity>
        )}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}




