import { SafeAreaView } from "react-native";
import React from "react";
import HeaderComponent from "../../components/HeaderComponent";

// importing the images
const MenuWhite = require("../../../images/menuWhite.png");
const MenuBlack = require("../../../images/menu.png");

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <SafeAreaView>
      {/* opening the drawer on Icon Click which is the HeaderComponent */}
      <HeaderComponent navigation={navigation}/>
    </SafeAreaView>
  );
};

export default Home;
