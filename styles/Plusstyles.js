// LoginStyles.js
import { StyleSheet } from 'react-native';
const BoxWidth = Math.floor(((ScreenWidth*.95) / 4) - 14)
import { ScreenWidth } from 'react-native-elements/dist/helpers';

export const styles = StyleSheet.create({
  container:{
    marginTop:50,
    padding:20,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    gap:20
  },
  header:{
    width:'100%',
    fontSize:16,
    fontWeight:'bold'
  },
  squareHolder:{
  width:'100%',
  flexDirection:'row',
  gap:5,
  flexWrap:'wrap'
},
listsquare:{
  width:'100%',
  alignItems:'center',
  borderWidth:1,
  borderColor:'#242E64',
  padding:10,
  borderRadius:8,
  gap:5,
  flexDirection:'row'
},
square:{
  width:BoxWidth,
  justifyContent:'center',
  alignItems:'center',
  borderWidth:1,
  borderColor:'#242E64',
  padding:10,
  borderRadius:8,
  gap:5
},
animatedview:{ 
  width: '95%', 
  flexDirection: 'column', 
  gap: 5 
},
inputContainer:{
  flexDirection:'row',
  gap:5,
  width:'95%'
},
input:{
  borderWidth:1,
  borderColor:'black',
  padding:10,
  width:'75%',
  borderRadius:8,
  backgroundColor:'#D9D9D9',
  fontSize:16
}
});
