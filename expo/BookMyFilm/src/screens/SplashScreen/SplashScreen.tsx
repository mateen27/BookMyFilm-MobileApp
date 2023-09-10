import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({navigation:any}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation:any.navigate('Home')
        }, 3000);
    } , [])
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})