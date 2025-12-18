import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const ProfileScreen = () => {
  return (
    <View style = {styles.container}>
      <Image
        source={require("../assets/icon.png" )}
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
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bio: {
    marginTop: 8,
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});