import { StyleSheet, Text, View , Image } from 'react-native'
import React, { useEffect } from 'react'

const Logo = require('../../../images/Asset.png');

interface SplashScreenProps {
  navigation: any;
}

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('OnBoarding')
        }, 3000);
    } , [])
  return (
    <View style = {styles.container}>
      <Image source={Logo} style = {styles.splashImage}/>
      <Text style = {styles.textStyling}>Movie Moments, Shared Anytime!</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#474646' , 
    flex : 1 , 
    alignItems : 'center' , 
    justifyContent : 'center'
  } , 
  textStyling : {
    color : '#FFDF6E' , 
    fontSize : 22 , 
    fontWeight : 'bold' , 
    marginTop : '5%'
  } , 
  splashImage : {
    height : 70
  },
})
