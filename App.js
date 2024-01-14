import React, { useEffect, useState } from 'react';
import { NetworkProvider } from 'react-native-offline';
import Layout from './Layout';
import { NavigationContainer } from '@react-navigation/native';
import {UserInformation} from './hooks/useUser'



const App = () => {

  
  return (
    <>
    <UserInformation>
      <NavigationContainer>
       <NetworkProvider>
         <Layout />
       </NetworkProvider>
      </NavigationContainer>
    </UserInformation>
    </>
  );
};

export default App;
