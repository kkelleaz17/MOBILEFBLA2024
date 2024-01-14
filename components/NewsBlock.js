import { View, Text,TouchableOpacity,Image,Linking } from 'react-native'
import React,{useState,useEffect} from 'react'
import Animated,{FadeInUp} from 'react-native-reanimated';
import newsStyles from '../styles/Newsstyles';


// Define the NewsBlock component
export default function NewsBlock({ NewsItem }) {
    // State to manage the image source
    const [imageSrc, setImageSrc] = useState('');
  
    // Effect to update the image source when NewsItem.media_url changes
    useEffect(() => {
      setImageSrc(NewsItem.media_url);
    }, [NewsItem.media_url]);
  
    // Destructuring relevant properties from NewsItem
    const { caption, timestamp, permalink } = NewsItem;
  
    // Check if timestamp is valid before creating the Date object
    if (!timestamp || isNaN(new Date(timestamp).getTime())) {
      console.error("Invalid timestamp:", timestamp);
      return null;
    }
  
    // Create a Date object and extract day, month, and year
    const DateObject = new Date(timestamp);
    const day = DateObject.getDate();
    const month = DateObject.getMonth() + 1; // Adding 1 to get the correct month
    const year = DateObject.getFullYear().toString().slice(-2); // Getting the last two digits of the year
  
    // Format the date as MM/DD/YY
    const formattedDate = `${month}/${day}/${year}`;
  
    // Function to open the Instagram post using Linking
    const openInstagramPost = () => {
      Linking.openURL(permalink);
    };
  
    // If image source is not available, return null
    if (!imageSrc) {
      return null;
    }
  
    // Render the NewsBlock component
    return (
      <Animated.View style={newsStyles.newsBlockContainer} entering={FadeInUp}>
        <TouchableOpacity
          style={newsStyles.newsBlockTouchable}
          onPress={openInstagramPost}
        >
          <Image source={{ uri: imageSrc }} style={newsStyles.newsBlockImage} />
          <Text style={newsStyles.newsBlockCaption}>{caption}</Text>
          <Text style={newsStyles.newsBlockDate}>{formattedDate}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }