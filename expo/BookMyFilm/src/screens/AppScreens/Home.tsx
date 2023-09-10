import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24 }} onPress={() => navigation.openDrawer()}>
        Home
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
