import { View, Text,Image,StyleSheet,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/TermsStyles';
export default function Terms() {
  const Nav = useNavigation();
  const companyname = 'FutureSite'
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/fbla20only.png')} style={{width: 150,height: 150,resizeMode: 'contain'}}/>
      <Text style={styles.title}>Terms of Service</Text>

      <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
      <Text style={styles.paragraph}>
        By accessing or using the {companyname} mobile application futuresite, you agree to comply with and be bound by these Terms of Service.
      </Text>

      <Text style={styles.sectionTitle}>2. User Responsibilities</Text>
      <Text style={styles.paragraph}>
        Users are solely responsible for their use of the App and agree to comply with all applicable laws and regulations. Users must not engage in any activity that interferes with or disrupts the functionality of the App.
      </Text>

      <Text style={styles.sectionTitle}>3. Intellectual Property</Text>
      <Text style={styles.paragraph}>
        All content and materials available in the App, including but not limited to text, graphics, logos, images, and software, are the property of {companyname} and are protected by applicable intellectual property laws.
      </Text>

      <Text style={styles.sectionTitle}>4. Privacy Policy</Text>
      <Text style={styles.paragraph}>
        Your use of the App is also governed by our Privacy Policy, which can be found at [Link to Privacy Policy]. By using the App, you consent to the terms of the Privacy Policy.
      </Text>

      <Text style={styles.sectionTitle}>5. Termination</Text>
      <Text style={styles.paragraph}>
        {companyname} reserves the right to terminate or suspend your access to the App at any time, with or without cause. Upon termination, all rights and licenses granted to you will immediately cease.
      </Text>

      <Text style={styles.sectionTitle}>6. Dispute Resolution</Text>
      <Text style={styles.paragraph}>
        Any disputes arising out of or relating to these Terms of Service will be resolved through binding arbitration, in accordance with the rules of the {companyname}. Each party shall bear its own costs in the arbitration proceedings.
      </Text>

      <Text style={styles.sectionTitle}>7. Modifications to Terms</Text>
      <Text style={styles.paragraph}>
        {companyname} reserves the right to update or modify these Terms of Service at any time without prior notice. Changes will be effective immediately upon posting. Continued use of the App after any modifications constitutes acceptance of the revised terms.
      </Text>

      <Text style={styles.sectionTitle}>8. Contact Information</Text>
      <Text style={styles.paragraph}>
        If you have any questions or concerns about these Terms of Service, please contact us at {'Kristopheraz@live.com'}.
      </Text>
      <TouchableOpacity style={styles.btn} onPress={()=>{Nav.goBack();}}>
        <Text style={{color:'white'}}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}


