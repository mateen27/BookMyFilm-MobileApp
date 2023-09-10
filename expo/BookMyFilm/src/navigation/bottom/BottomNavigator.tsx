import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/AppScreens/Home";
import About from "../../screens/AppScreens/About";
import Profile from "../../screens/AppScreens/Profile";

// icons import
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const BottomNavigator = () => {
  const Bottom = createBottomTabNavigator();

  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false , tabBarIcon : () => {
            return (
                <AntDesign name="home" size={24} color="black" />
            )
        }}}
      />
      <Bottom.Screen
        name="About"
        component={About}
        options={{ headerShown: false , tabBarIcon : () => {
            return (
                <MaterialIcons name="movie" size={24} color="black" />
            )
        } }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false , tabBarIcon : (tabIcon) => {
            return (
                <FontAwesome name="bicycle" size={24} style= {{color : tabIcon.focused ? 'purple' : 'black'}}  />
            )
        } }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
