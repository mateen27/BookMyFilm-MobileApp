import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomDrawer = () => {
  return (
    <View style = {{backgroundColor : '#333' , flex : 1  , justifyContent : 'center' , alignItems : 'center' , }}>
      <Text style = {{color : 'white'}}>CustomDrawer</Text>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})