// Import necessary React Native components and libraries
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

// Functional component for displaying sections with various items (Skills, References, Licenses, Languages, Links)
export default function OtherSection({ CurrentUser }) {
  return (
    <View style={{ width: '95%' }}>
      {/* Skills Section */}
      {CurrentUser.skills.length !== 0 && 
        <View style={{ width: '95%', gap: 10 }}>
          <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 18 }}>Skills</Text>
          <ScrollView contentContainerStyle={{ alignItems: 'center', flexDirection: 'row', gap: 10, minWidth: '95%' }} horizontal>
            {CurrentUser.skills.map(e => {
              return <View style={{ backgroundColor: '#D9D9D9', padding: 25, borderRadius: 8, alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }} key={e.id}>
                <Text style={{ fontSize: 20 }}>{e.skill}</Text>
              </View>;
            })}
          </ScrollView>
        </View>
      }

      {/* References Section */}
      {CurrentUser.references.length !== 0 && 
        <View style={{ width: '95%', gap: 10 }}>
          <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 18 }}>References</Text>
          <ScrollView contentContainerStyle={{ alignItems: 'center', flexDirection: 'row', gap: 10, minWidth: '95%' }} horizontal>
            {CurrentUser.references.map(e => {
              return <View style={{ backgroundColor: '#D9D9D9', padding: 25, borderRadius: 8, alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }} key={e.id}>
                <Text style={{ fontSize: 20 }}>{e.reference}</Text>
              </View>;
            })}
          </ScrollView>
        </View>
      }

      {/* Licenses Section */}
      {CurrentUser.licenses.length !== 0 && 
        <View style={{ width: '95%', gap: 10 }}>
          <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 18 }}>Licenses</Text>
          <ScrollView contentContainerStyle={{ alignItems: 'center', flexDirection: 'row', gap: 10, minWidth: '95%' }} horizontal>
            {CurrentUser.licenses.map(e => {
              return <View style={{ backgroundColor: '#D9D9D9', padding: 25, borderRadius: 8, alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }} key={e.id}>
                <Text style={{ fontSize: 20 }}>{e.license}</Text>
              </View>;
            })}
          </ScrollView>
        </View>
      }

      {/* Languages Section */}
      {CurrentUser.languages.length !== 0 && 
        <View style={{ width: '95%', gap: 10 }}>
          <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 18 }}>Languages</Text>
          <ScrollView contentContainerStyle={{ alignItems: 'center', flexDirection: 'row', gap: 10, minWidth: '95%' }} horizontal>
            {CurrentUser.languages.map(e => {
              return <View style={{ backgroundColor: '#D9D9D9', padding: 25, borderRadius: 8, alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }} key={e.id}>
                <Text style={{ fontSize: 20 }}>{e.language}</Text>
              </View>;
            })}
          </ScrollView>
        </View>
      }

      {/* Links Section */}
      {CurrentUser.otherLinks.length !== 0 && 
        <View style={{ width: '95%', gap: 10 }}>
          <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 18 }}>Links</Text>
          <ScrollView contentContainerStyle={{ alignItems: 'center', flexDirection: 'row', gap: 10, minWidth: '95%' }} horizontal>
            {CurrentUser.otherLinks.map(e => {
              return <View style={{ backgroundColor: '#D9D9D9', padding: 25, borderRadius: 8, alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }} key={e.id}>
                <Text style={{ fontSize: 20 }}>{e.link}</Text>
              </View>;
            })}
          </ScrollView>
        </View>
      }
    </View>
  );
}
