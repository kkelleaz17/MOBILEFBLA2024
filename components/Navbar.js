// Import necessary React and React Navigation components
import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import NavButton from './NavButton'; // Assuming this is a custom component you've defined
import { useUser } from '../hooks/useUser';

// Define constant values for icon size and color
const size = 24;
const color = '#242E64';

// Main Navbar component
const Navbar = () => {
    // Use the useUser hook to access user information
    const { user } = useUser();
    const navigation = useNavigation();

    // Function to navigate to a specified location
    const Nav = (location) => {
        navigation.navigate(location);
    };

    // Return the JSX for the Navbar component
    return (
        <View style={{ flexDirection: 'row', padding: 2, height: 50, position: 'absolute', bottom: 0, backgroundColor: 'white' }}>
            {/* Home Button */}
            <NavButton name={'Home'} onclick={() => { Nav('home') }}>
                <Foundation name="home" size={size} color={color} />
            </NavButton>

            {/* Community Button */}
            <NavButton name={'Community'} onclick={() => { Nav('community') }}>
                <Ionicons name="md-wifi" size={size} color={color} />
            </NavButton>

            {/* Plus Button */}
            <NavButton name={''} onclick={() => { Nav('plus') }}>
                {/* Custom Plus Button with circle */}
                <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ backgroundColor: '#7EC2D3', borderRadius: 50, width: 80, height: 80, alignItems: 'center', justifyContent: 'center', position: 'absolute', top: -20, borderWidth: 10, borderColor: '#f3f3f3' }}>
                        <Ionicons name="md-add" size={size + 15} color={color} />
                    </View>
                </View>
            </NavButton>

            {/* News Button */}
            <NavButton name={'News'} onclick={() => { Nav('news') }}>
                <FontAwesome5 name="newspaper" size={size} color={color} />
            </NavButton>

            {/* Profile Button */}
            <NavButton name={'Profile'} onclick={() => { navigation.navigate('profile', { uid: user.uid }) }}>
                <MaterialIcons name="person" size={size} color={color} />
            </NavButton>
        </View>
    );
};

// Export the Navbar component as the default export
export default Navbar;
