import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ArticleCard from "../components/ArticleCard";
import news from "../assets/dummyArticles.json";
import CategoryBar from "../components/CategoryBar";
import Colors from "../colors";

const categories = [
  "All",
  "Technology",
  "Sports",
  "Politics",
  "Science",
  "Health"
];

export default function HomeScreen() {
  const navigation = useNavigation();

  const [category, SetCategory] = useState("All")


  return (
    <View style={styles.container}>
      <CategoryBar categories = {categories} selected = {category} onSelect= {SetCategory}/>
      
      <FlatList
        data={news.articles}
        renderItem={({ item }) => (
          <ArticleCard
            article={item}
            onPress={() => navigation.navigate("Detail", { article: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
