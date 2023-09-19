// root navigator

import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import HomeScreen from "../../screens/HomeScreen";
import SplashScreen from "../../screens/SplashScreen/SplashScreen";
import Notification from "../../screens/AppScreens/Notification";
import OnBoardingScreen from "../../screens/AppScreens/OnBoardingScreen";
import SignupUI from "../../screens/AppScreens/SignUp";
import BottomNavigator from "../bottom/BottomNavigator";
import Search from "../../screens/AppScreens/Search";
import Ticket from "../../screens/AppScreens/Ticket";
import WatchMovies from "../../screens/AppScreens/WatchMovies";
import MovieDetails from "../../screens/AppScreens/MovieDetails";

// stackNavigator
const Stack = createNativeStackNavigator();

const AppNavigator: React.FC<{}> = () => {
  // for passing navigation prop to the Component
  const navigation = useNavigation();

  // for displaying onBoarding State or not
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  return (
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
      <Stack.Screen
        name="Seacrh"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{ headerShown: false }}
      />
      {/* Bottom Navigator */}
      <Stack.Screen name="Bottom">
        {() => <BottomNavigator navigation={navigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
