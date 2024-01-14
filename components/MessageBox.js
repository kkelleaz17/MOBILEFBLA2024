import { View, Text, Image } from 'react-native';
import React from 'react';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

// MessageBox component definition
export default function MessageBox(props) {
    // Destructure Header and Message from props
    const { Header, Message } = props;

    // Return JSX for the MessageBox component
    return (
        <Animated.View entering={FadeIn} exiting={FadeOut} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', position: 'absolute', width: '100%' }}>
            {/* Black overlay */}
            <View style={{ width: '100%', height: '100%', backgroundColor: 'black', opacity: 0.75, position: 'absolute' }}></View>

            {/* White message box */}
            <View style={{ backgroundColor: 'white', width: '85%', padding: 20, justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                {/* FBLA logo */}
                <Image source={require('../assets/fbla20only.png')} style={{ width: 100, resizeMode: 'contain', borderBottomWidth: 2, height: 100 }} />

                {/* Header text */}
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>{Header}</Text>

                {/* Message text */}
                <Text style={{ color: 'black' }}>{Message}</Text>

                {/* Render any additional children passed to the component */}
                {props.children}
            </View>
        </Animated.View>
    );
}
