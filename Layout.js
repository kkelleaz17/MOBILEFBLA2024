import { View, Text } from 'react-native'
import React,{useEffect,useMemo,useState} from 'react'
import { useIsConnected } from 'react-native-offline';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './FireBaseConfig';
import Navigation from './components/Navigation';
import Navbar from './components/Navbar';
import { useNavigation,useNavigationState } from '@react-navigation/native';
import { useUser } from './hooks/useUser';
import Loading from './components/Loading';
export default function Layout() {
    const firebase = useUser().firebase;
    const Connection = useIsConnected();
  
    const isConnected = ()=>{
        if(Connection && firebase){
            return true
        }
            return false
    }


    if(!isConnected){
      return null
    }


  return <Navigation /> 
  
}





