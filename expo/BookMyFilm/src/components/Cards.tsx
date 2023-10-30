import { StyleSheet, Text, View , Alert, ScrollView , ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ChatState } from '../context/ChatProvider'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { COLORS, FONTSIZE } from '../theme/theme';
import UserListItem from './UserListItem';
import UserList from './UserList';

const Cards = () => {

    const [ loggedUser , setLoggedUser ] = useState('');
    // const { selectedChat , setSelectedChat , user , chats , setChats } = ChatState();
    const [ chats , setChats ] = useState([]);

    // function to retrieve all chats
      // function for accessing the chats
  const fetchChats = async () => {
    try {
      // accessing the token from AsyncStorage
      const storedToken = await AsyncStorage.getItem("authToken");
      // console.log(storedToken);
      
      if (storedToken) {
        const config = {
          headers: {
            "Content-type": "application/json" ,
            Authorization: `Bearer ${storedToken}`, // Use the token from AsyncStorage
          },
        };

      // making an api call
      const { data } = await axios.get(`http://192.168.29.181:8080/api/chat` , config);
    //   console.log(data);
      
      setChats(data)
      // onclose()
      }

    } catch (error) {
      Alert.alert('Error Occurred' , 'Failed to load Chats')
    }
  }

//   const handleChatSelection = (chatId) => {
//     // Function to handle chat selection
//     // You might navigate to a specific chat or perform other actions based on chatId
//     console.log('Chat selected:', chatId);
//   };

  useEffect(() => {
    const getLoggedUser = async () => {
      const userToken: any = await AsyncStorage.getItem('authToken');
      setLoggedUser(userToken);
    };

    getLoggedUser();
    fetchChats();
  }, []);

//   console.log('chats' ,chats);
  return (
    <View style = {styles.container}>
        <View style = {styles.headerText}>
            <Text style = {styles.text}>My Chats</Text>
        </View>
        <View>
        {chats ? (
          chats.map((chat) => (
            <UserList key={chat._id} user={chat} loggedUser={loggedUser} />
          ))
    ) : (
        <ActivityIndicator size="large" color="#00ff00" />
    )}
        </View>
    </View>
  )
}

export default Cards

const styles = StyleSheet.create({
    container : {
        // margin : '2%'
    } ,
    headerText : {
        marginTop : '3%' , 
        justifyContent : 'center' , 
        alignItems : 'center'
    } , 
    text : {
        color : COLORS.White , 
        fontSize : FONTSIZE.size_24
    }
})