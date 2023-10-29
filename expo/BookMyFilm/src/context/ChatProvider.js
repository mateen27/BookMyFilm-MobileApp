import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigation = useNavigation();

  // checking if the token is present or not when the app opens
  useEffect(() => {
    const checkingLoginStatus = async() => {
      try {
        const token = await AsyncStorage.getItem('authToken');

        // token is present
        if(token) {
          navigation.navigate('Home')
        }
        // token is not present
        else {
          navigation.navigate('Login')
        }
      } catch (error) {
        console.log("error",error);
      }
    }
    checkingLoginStatus();
  } , [])

  return (
    <ChatContext.Provider value={{ user, setUser }}>
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
