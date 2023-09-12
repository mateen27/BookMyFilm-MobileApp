import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'

// importing the Header Component
import HeaderComponent from "../../components/HeaderComponent";

// importing the images
import Menu from '../../images/menuu.png'

const About: React.FC<{ navigation : any}> = ({navigation}) => {
  return (
    <SafeAreaView>
      {/* opening the drawer on Icon Click which is the HeaderComponent */}
      <HeaderComponent navigation={navigation}/>
    </SafeAreaView>
  )
}

export default About

const styles = StyleSheet.create({})