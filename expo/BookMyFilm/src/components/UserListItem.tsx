// UserListItem component
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { COLORS } from "../theme/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { ChatState } from "../context/ChatProvider";

const UserListItem = ({ user , handleFunction }: any) => {

    const { setSelectedChat , selectedChat ,  chats , setChats } = ChatState();

  return (
    <View style = {styles.mainContainer}>
      <TouchableOpacity style={styles.card} onPress={handleFunction}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: user.pic }} style={styles.profileImage} />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.username}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
        {/* <Text>Hi</Text> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    // margin : 5 ,
    // flex : 1 ,
    borderBottomWidth: 1,
    paddingBottom: 10,
    backgroundColor: '#333',
    width: 500,
    height: 100,
  },
  profileContainer: {
    paddingRight: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.White,
  },
  email: {
    fontSize: 14,
    color: COLORS.WhiteRGBA50,
  },
  mainContainer : {
    // marginTop : '20%' , 
    // flexDirection : 'row'
    // position : 'absolute' , 
    // marginVertical : '10%'
  }
});

export default UserListItem;
