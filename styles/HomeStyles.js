// LoginStyles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({  
    container:{ 
        alignItems: 'center', 
        marginTop: 50, 
        padding: 10, 
        width: '100%', 
        gap: 10, 
        paddingBottom: 350 
    },
    image:{ 
        width: 150,
        height: 150, 
        objectFit: 'contain' 
    },
    welcome:{ 
        fontSize: 25, 
        fontWeight: 'bold' 
    }
});

