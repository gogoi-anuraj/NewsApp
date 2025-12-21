import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../colors";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <TextInput placeholder="Search here" style={styles.input} />
        <Pressable
          onPress={() => {
            console.log("search");
          }}
          style={({ pressed }) => [
            styles.searchButton,
            pressed && {
              backgroundColor: "#646f92ff",
              shadowColor: "#000000ff",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 1,
              shadowRadius: 1,
              elevation: 10,
            },
          ]}
        >
          <Ionicons name="search-outline" size={25} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 20,
    padding: 15,
  },

  searchbar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffffff",
    borderRadius: 30,
    paddingHorizontal: 10,
    height: 60,
    justifyContent: "space-between",
    borderColor: Colors.border,
    borderWidth: 1.5,
  },

  input: {
    marginLeft: 10,
    fontSize: 18,
    color: "#000",
    flex: 1,
  },
  searchButton: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: "#3d4f87ff",
    justifyContent: "center",
    alignItems: "center",
  },
});
