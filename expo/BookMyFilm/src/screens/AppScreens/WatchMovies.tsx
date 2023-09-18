import { View, Text } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React from 'react'

const WatchMovies = () => {
    const navigation = useNavigation();
  return (
    <View style = {{backgroundColor : 'black' , flex : 1}}>
      <Text>WatchMovies</Text>
    </View>
  )
}

export default WatchMovies