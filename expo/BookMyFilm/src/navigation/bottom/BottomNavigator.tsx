import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/AppScreens/Home";
import About from "../../screens/AppScreens/About";
import Profile from "../../screens/AppScreens/Profile";

// icons import
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// user
import { Feather } from "@expo/vector-icons";
// ticket
import { FontAwesome } from '@expo/vector-icons';
// stream & chat
import { Ionicons } from '@expo/vector-icons';

const BottomNavigator = () => {
  const Bottom = createBottomTabNavigator();

  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarInactiveBackgroundColor: "black",
        tabBarActiveBackgroundColor: "#FA650F",
      }}
    >
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#FFFFFF",
          tabBarIcon: (tabIcon) => {
            return (
              <AntDesign
                name="home"
                size={24}
                color="#FFFFFF"
                style={{ color: tabIcon.focused ? "black" : "white" }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Book Ticket"
        component={About}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#FFFFFF",
          tabBarIcon: (tabIcon) => {
            return (
              <FontAwesome
                name="ticket"
                size={24}
                color="white"
                style={{ color: tabIcon.focused ? "black" : "white" }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Chat"
        component={About}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#FFFFFF",
          tabBarIcon: (tabIcon) => {
            return (
              <Ionicons
                name="chatbox-outline"
                size={24}
                color="white"
                style={{ color: tabIcon.focused ? "black" : "white" }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Stream"
        component={About}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#FFFFFF",
          tabBarIcon: (tabIcon) => {
            return (
              <Ionicons
                name="videocam-outline"
                size={24}
                color="white"
                style={{ color: tabIcon.focused ? "black" : "white" }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#FFFFFF",
          tabBarIcon: (tabIcon) => {
            return (
              <Feather
                name="user"
                size={24}
                style={{ color: tabIcon.focused ? "black" : "white" }}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
