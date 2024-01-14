// Import necessary React Native components
import { View, Text, ScrollView } from 'react-native';
import React from 'react';

// Functional component to display work section information
export default function WorkSection({ CurrentUser }) {
  return (
    <View style={{ width: '95%' }}>
      {/* Display Community Service section if there are entries */}
      {CurrentUser.communityService.length !== 0 &&
        <View style={{ width: '95%', gap: 10 }}>
          <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 18 }}>Community Service</Text>
          <ScrollView contentContainerStyle={{ alignItems: 'center', flexDirection: 'row', gap: 10, minWidth: '95%' }} horizontal>
            {/* Map through Community Service entries and display them */}
            {CurrentUser.communityService.map(e => {
              return <View style={{ backgroundColor: '#D9D9D9', padding: 25, borderRadius: 8, alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }} key={e.id}>
                <Text style={{ fontSize: 20 }}>{e.name}</Text>
                <Text style={{ fontSize: 16 }}>{e.date1 + '-' + e.date2}</Text>
              </View>
            })}
          </ScrollView>
        </View>}

      {/* Display Internships section if there are entries */}
      {CurrentUser.internships.length !== 0 &&
        <View style={{ width: '95%', gap: 10 }}>
          <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 18 }}>Internships</Text>
          <ScrollView contentContainerStyle={{ alignItems: 'center', flexDirection: 'row', gap: 10, minWidth: '95%' }} horizontal>
            {/* Map through Internships entries and display them */}
            {CurrentUser.internships.map(e => {
              return <View style={{ backgroundColor: '#D9D9D9', padding: 25, borderRadius: 8, alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }} key={e.id}>
                <Text style={{ fontSize: 20 }}>{e.name}</Text>
                <Text style={{ fontSize: 16 }}>{e.date1 + '-' + e.date2}</Text>
              </View>
            })}
          </ScrollView>
        </View>}

      {/* Display Experiences section if there are entries */}
      {CurrentUser.experiences.length !== 0 &&
        <View style={{ width: '95%', gap: 10 }}>
          <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 18 }}>Experiences</Text>
          <ScrollView contentContainerStyle={{ alignItems: 'center', flexDirection: 'row', gap: 10, minWidth: '95%' }} horizontal>
            {/* Map through Experiences entries and display them */}
            {CurrentUser.experiences.map(e => {
              return <View style={{ backgroundColor: '#D9D9D9', padding: 25, borderRadius: 8, alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }} key={e.id}>
                <Text style={{ fontSize: 20 }}>{e.name}</Text>
                <Text style={{ fontSize: 16 }}>{e.date1 + '-' + e.date2}</Text>
              </View>
            })}
          </ScrollView>
        </View>}
    </View>
  );
}
