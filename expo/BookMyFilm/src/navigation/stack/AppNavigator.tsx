// root navigator

import { StyleSheet, Text, View } from "react-native";
import React , { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../../screens/HomeScreen";
import SplashScreen from "../../screens/SplashScreen/SplashScreen";
import Notification from "../../screens/AppScreens/Notification";
import OnBoardingScreen from "../../screens/AppScreens/OnBoardingScreen";

// stackNavigator
const Stack = createNativeStackNavigator();

const AppNavigator: React.FC<{}> = () => {

  // for displaying onBoarding State or not 
  const [isAppFirstLaunched , setIsAppFirstLaunched] = useState(null)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnBoarding"
          component={OnBoardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
