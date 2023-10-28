import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../theme/theme";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { ChatState } from "../../context/ChatProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Notification = () => {
  const navigation = useNavigation();
  const { user } = ChatState();

  const [showSearch, setShowSearch] = useState(false);
  const [ tokenAvailable , setTokenAvailable ] = useState(false);

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const backHandler = () => {
    navigation.goBack();
  }

  useEffect(() => {
    const checkingLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        console.log(token);
        
        if (token) {
            if (token !== null && token !== undefined) {
              setTokenAvailable(true);
            }
            navigation.navigate('Notification');
        } else {
          const value = Alert.alert('You are logged in as Guest!', 'Login Now');
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    checkingLoginStatus();
  }, []);

  return (
    <>
      <View style={styles.header}>
          <TouchableOpacity style={styles.iconContainer} onPress={backHandler}>
            <Ionicons name="chevron-back-sharp" size={26} color={COLORS.White} />
          </TouchableOpacity>

        <View style={styles.titleContainer}>
          { showSearch ? (
            <TextInput
              style={styles.searchInput}
              placeholder="Search Friends"
              autoFocus={true}
              onBlur={toggleSearch}
            />
          ) : (
            <Text style={styles.title}>Chats</Text>
          )}
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={toggleSearch}>
          {showSearch ? (
            <Ionicons name="close" size={26} color={COLORS.White} />
          ) : (
            <Ionicons name="search" size={26} color={COLORS.White} />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={{ color: "white" }}>hi</Text>
      </View>

      { tokenAvailable && (<TouchableOpacity style={styles.groupButton}>
        <Ionicons name="people" size={24} color={COLORS.White} style={styles.groupIcon} />
        <Text style={styles.groupText}>Groups</Text>
      </TouchableOpacity>)}

      { tokenAvailable && (<TouchableOpacity style={styles.callButton}>
        <Ionicons name="call" size={24} color={COLORS.White} style={styles.callIcon} />
        <Text style={styles.callText}>Calls</Text>
      </TouchableOpacity>)}

      <StatusBar style="dark" />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.Orange,
    height: 60,
    paddingHorizontal: 10,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: COLORS.White,
    fontWeight: "500",
  },
  iconContainer: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.Black,
    justifyContent: "center",
    alignItems: "center",
  },
  groupButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.White,
    borderRadius: 5,
    padding: 10,
    position: "absolute",
    top: 70,
    right: 10,
  },
  groupIcon: {
    marginRight: 10,
  },
  groupText: {
    color: COLORS.White,
    fontSize: 16,
  },
  callButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.White,
    borderRadius: 5,
    padding: 10,
    position: "absolute",
    top: 70,
    left: 10,
  },
  callIcon: {
    marginRight: 10,
  },
  callText: {
    color: COLORS.White,
    fontSize: 16,
  },
  searchInput: {
    color: COLORS.White,
    fontSize: 18,
    borderBottomColor: COLORS.White,
    borderBottomWidth: 1,
    width: 200, // Adjust the width as needed
  },
});

export default Notification;
