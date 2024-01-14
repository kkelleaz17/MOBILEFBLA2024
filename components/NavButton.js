// Import necessary React and React Navigation components
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

// Functional component for a navigation button
export default function NavButton(props) {
    // Determine if the button corresponds to the current route, adjust style accordingly
    const RouteStyle = String(props.name).toLowerCase() === String(useRoute().name).toLowerCase() ? { textDecorationLine: 'underline' } : {};

    // Return a TouchableOpacity containing the provided children and text
    return (
        <TouchableOpacity style={{ width: '20%', alignItems: 'center', justifyContent: 'center' }} onPress={props.onclick}>
            {props.children}
            {/* Apply styles, including any styles specific to the current route */}
            <Text style={[{ fontSize: 10 }, RouteStyle]}>{props.name}</Text>
        </TouchableOpacity>
    );
}
