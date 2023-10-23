import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect , useState } from 'react'
import axios from 'axios'

const Notification = () => {

    // state management
    const [ chats , setChats ] = useState([]);

    // fetching the chats data
    const fetchChats = async () => {
        const { data } = await axios.get('http://192.168.29.181:8080/api/chat');

        setChats(data);       
    }

    useEffect(() => {
        fetchChats();
    } , [])

  return (
      <View>
        {
            chats.map((chat) => (
                <Text key={chat._id}>{chat.chatName}</Text>
            ))
        }
      </View>
  )
}

export default Notification

const styles = StyleSheet.create({})