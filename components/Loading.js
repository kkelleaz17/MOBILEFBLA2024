import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

// Loading component definition
export default function Loading() {
    // State to manage the loading dots animation
    const [loadingState, setLoadingState] = useState(0);

    // Effect to update the loading state at intervals
    useEffect(() => {
        // Interval to update loading state every 500 milliseconds
        const intervalId = setInterval(() => {
            setLoadingState((prev) => {
                // Reset to 0 if it reaches 3, otherwise increment
                if (prev === 3) {
                    return 0;
                }
                return prev + 1;
            });
        }, 500);

        // Cleanup function to clear the interval on component unmount
        return () => {
            clearInterval(intervalId);
        };
    }, []); // Empty dependency array ensures the effect runs only once

    // Generate loading dots based on the loading state
    const loadingDots = '.'.repeat(loadingState);

    // Return JSX for the Loading component
    return (
        <Animated.View entering={FadeIn} exiting={FadeOut} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', position: 'absolute', width: '100%', zIndex: 5 }}>
            {/* Black overlay */}
            <View style={{ width: '100%', height: '100%', backgroundColor: 'black', opacity: 0.75, position: 'absolute' }}></View>

            {/* FBLA logo */}
            <Image source={require('../assets/fbla20only.png')} style={{ width: 250, resizeMode: 'contain' }} />

            {/* Loading text with dynamic loading dots */}
            <Text style={{ color: 'white' }}>Loading {loadingDots}</Text>
        </Animated.View>
    );
}
