import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import Colors from "../colors";


const ArticleCard = ({ article, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [{ padding: 12 }, pressed && {backgroundColor:"rgba(11, 11, 11, 0.27)"}]}>
      
      <Image
        source={{ uri: article.urlToImage }}
        style={{ height: 180, borderRadius: 10 }}
        resizeMode="cover"
      />

      
      <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 8 }}>
        {article.title}
      </Text> 

      
      <Text style={{ color: Colors.secondaryText, marginTop: 4 }}>By {article.author}</Text>

      
      <Text style={{ color: Colors.secondaryText, fontSize: 12 }}>
        {new Date(article.publishedAt).toDateString()}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
  },
});
export default ArticleCard;
