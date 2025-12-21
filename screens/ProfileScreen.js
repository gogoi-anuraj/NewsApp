import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../colors";


const ProfileScreen = () => {
  return (
    <View style = {styles.container}>
      <Image
        source={require("../assets/favicon.png" )}
        style = {styles.image}
      />
      <Text style = {styles.name}>User Name</Text>
      <Text style = {styles.bio}>User Bio:</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: Colors.border
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text
  },
  bio: {
    marginTop: 8,
    fontSize: 14,
    color: Colors.secondaryText,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});