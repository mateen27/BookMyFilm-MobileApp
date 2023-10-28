import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../theme/theme";
import { StatusBar } from "expo-status-bar";

const Notification = ({ title, onBackPress, onSearchPress }: any) => {
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer} onPress={onBackPress}>
          <Ionicons name="chevron-back-sharp" size={26} color={COLORS.White} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Chats</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={onSearchPress}>
          <Ionicons name="search" size={26} color={COLORS.White} />
        </TouchableOpacity>
      </View>

      {/* Body container */}
      <View style={styles.container}>
            <Text style = {{ color : 'white'}}>hi</Text>
      </View>

      {/* Groups button */}
      <TouchableOpacity style={styles.groupButton}>
        <Ionicons name="people" size={24} color={COLORS.White} style={styles.groupIcon} />
        <Text style={styles.groupText}>Groups</Text>
      </TouchableOpacity>

      {/* Call button */}
      <TouchableOpacity style={styles.callButton}>
        <Ionicons name="call" size={24} color={COLORS.White} style={styles.callIcon} />
        <Text style={styles.callText}>Calls</Text>
      </TouchableOpacity>

      <StatusBar style="dark" />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.Orange,
    height: 60,
    paddingHorizontal: 10,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: COLORS.White,
    fontWeight: '500'
  },
  iconContainer: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.Black,
    justifyContent: "center",
    alignItems: "center",
  },
  groupButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.White,
    borderRadius: 5,
    padding: 10,
    position: 'absolute',
    top: 70,
    right: 10,
  },
  groupIcon: {
    marginRight: 10,
  },
  groupText: {
    color: COLORS.White,
    fontSize: 16,
  },
  callButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.White,
    borderRadius: 5,
    padding: 10,
    position: 'absolute',
    top: 70,
    left: 10,
  },
  callIcon: {
    marginRight: 10,
  },
  callText: {
    color: COLORS.White,
    fontSize: 16,
  },
});

export default Notification;
