import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import { AntDesign } from "@expo/vector-icons";
  import Icon from "react-native-vector-icons/FontAwesome";
  import { Feather } from "@expo/vector-icons";
  import { FontAwesome } from "@expo/vector-icons";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import React, { useState } from "react";
  import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize,
  } from "react-native-responsive-dimensions";
  
  const LoginScreen = ({navigation , route} :any) => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
  
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {/* for the image */}
          <View style={styles.imageContainer}>
            <Image source={require("../../../images/women.png")} style={styles.image} />
          </View>
  
          {/* for the heading and subHeading */}
          <View style={styles.textContainer}>
            <Text style={styles.heading}>Welcome Back!</Text>
            <Text style={styles.subHeading}>Login to your existing account</Text>
          </View>
  
          {/* for textInput Fields */}
          <View style={styles.textInputContainer}>
            <AntDesign name="user" size={24} color="white" />
            <TextInput style={styles.textbox} placeholder="User Name" placeholderTextColor="gray" />
          </View>
          <View style={styles.textInputContainer}>
            <Feather name="unlock" size={24} color="white" />
            <TextInput
              style={styles.textbox}
              placeholder="Password"
              placeholderTextColor="gray" // Change this to the color you want
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={toggleShowPassword}
              style={styles.showPasswordButton}
            >
              <Icon name={showPassword ? "unlock" : "lock"} size={20} color='white'/>
            </TouchableOpacity>
          </View>
  
          {/* Forgot Password */}
          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot Password!</Text>
            </TouchableOpacity>
          </View>
  
          {/* Login Button */}
          <View style={styles.loginButtonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.loginButton}>Login</Text>
            </TouchableOpacity>
          </View>
  
          {/* Connect Using Section */}
          <View style={styles.connectContainer}>
            <Text style={styles.connectText}>Or Connect using</Text>
          </View>
  
          {/* Social Media Buttons */}
          <View style={styles.connectContainer}>
            {/* Facebook Icon */}
            <TouchableOpacity style={styles.socialIconContainer}>
              <FontAwesome name="facebook" size={22} color="white" />
              <Text style={styles.socialText}>Facebook</Text>
            </TouchableOpacity>
            {/* Gmail Icon */}
            <TouchableOpacity
              style={[styles.socialIconContainer, { backgroundColor: "#DF5146" }]}
            >
              <MaterialCommunityIcons name="gmail" size={24} color="white" />
              <Text style={styles.socialText}>Gmail</Text>
            </TouchableOpacity>
          </View>
  
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "5%",
            }}
          >
            <Text style={{ marginHorizontal: 2 , color : '#ffffff' }}>Don't Have An Account?</Text>
            <TouchableOpacity>
                <Text style={{ color: "#87CEEB" }}>Signup</Text></TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor : '#000000'
    },
    imageContainer: {
      alignItems: "center",
      marginVertical: "5%",
    },
    image: {
      width: 250,
      height: 250,
    },
    textContainer: {
      alignItems: "center",
    },
    heading: {
      fontSize: responsiveScreenFontSize(5),
      marginBottom : '5%' , 
      color : '#ffffff'
    },
    subHeading: {
      fontSize: responsiveScreenFontSize(2.3),
      color: "grey",
      marginBottom: "2%",
    },
    textInputContainer: {
      flexDirection: "row",
    //   padding : '-5%',
      margin: "3%",
      // backgroundColor : 'orange' ,
      alignItems: "center", // Horizontally center the content
      justifyContent: "center", // Vertically center the content
      // paddingVertical: 5, // Add padding instead of fixed height
      borderColor: "#ffffff",
      borderWidth: 2,
      borderRadius: 50,
    //   justifyContent: "center",
      position: "relative", // Add position relative to the container , 
      color : '#ffffff' , 
      // backgroundColor : 'grey'
  
    },
    textbox: {
      fontSize: responsiveScreenFontSize(2),
      width: responsiveScreenWidth(60),
      height: responsiveScreenHeight(8),
      textAlign: "center",
      color: '#ffffff', // Text color when typing
      // margin  : 1
      
    },
    forgotPasswordContainer: {
      alignItems: "flex-end",
      marginRight: "8%",
    },
    forgotText: {
      color: "grey",
      fontWeight: "700",
    },
    loginButtonContainer: {
      alignItems: "center",
      margin: "5%",
    },
    loginButton: {
      color: "white",
      backgroundColor: "#333",
      padding: "4%",
      borderRadius: 30,
      width: responsiveScreenWidth(40),
      textAlign: "center",
      fontWeight: "700",
    },
    connectContainer: {
      justifyContent: "center",
      flexDirection: "row",
    },
    connectText: {
      color: "grey",
      fontWeight: "700",
    },
    socialIconContainer: {
      flexDirection: "row",
      margin: "2%",
      backgroundColor: "#4867AA",
      padding: "1%",
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    socialText: {
      color: "white",
      fontWeight: "700",
      margin: "3%",
    },
    showPasswordButton: {
      position: "absolute",
      right: '3%', // Adjust the right position
      top: "50%", // Vertically center based on container's height
      transform: [{ translateY: -10 }], // Adjust to center align the icon
      // alignSelf: "flex-end", // Horizontally center within the container
    },
  });
  
  export default LoginScreen;
  