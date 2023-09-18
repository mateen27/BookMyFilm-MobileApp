import { SafeAreaView } from "react-native";
import React , { useEffect } from "react";
import HeaderComponent from "../../components/HeaderComponent";

// import for tailwind
import tw from 'twrnc'

// importing the images
import Menu from '../../images/menuu.png'

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <SafeAreaView style = {tw`flex-1 bg-black`}>
      {/* opening the drawer on Icon Click which is the HeaderComponent */}
      <HeaderComponent navigation={navigation}/>
    </SafeAreaView>
  );
};

export default Home;
