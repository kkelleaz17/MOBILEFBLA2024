import {Text, View,ScrollView} from 'react-native'
import React from 'react'
import { useUser } from '../hooks/useUser';
import NewsBlock from '../components/NewsBlock';
import newsStyles from '../styles/Newsstyles';

// Define the News component
export default function News() {
  const { news } = useUser();
  // Check if there is no news or the news array is empty
  if (news?.length === 0 || !news) {
    // Display a message when there is no news
    return (
      <View style={newsStyles.container}>
        <Text style={newsStyles.messageText}>Check Back Later</Text>
      </View>
    );
  }
  // Render the News component with news data
  return (
    <ScrollView contentContainerStyle={newsStyles.scrollViewContainer}>
      <Text style={newsStyles.recentNewsText}>Recent News</Text>
      {news.map((e, i) => {
        return <NewsBlock NewsItem={e} key={e.timestamp} />;
      })}
    </ScrollView>
  );
}


