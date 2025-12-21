import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import Colors from "../colors";

const ArticleCard = ({ article, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        { padding: 12 },
        pressed && { backgroundColor: "rgba(109, 129, 150, 0.27)" },
      ]}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: article.urlToImage }}
          style={{ height: 180, borderRadius: 10 }}
          resizeMode="cover"
        />

        <View style={styles.sourceBadge}>
          <Text style={styles.sourceText}>Source : {article.source.name}</Text>
        </View>
      </View>

      <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 8 }}>
        {article.title}
      </Text>

      <Text style={{ color: Colors.secondaryText, marginTop: 4 }}>
        By {article.author}
      </Text>

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

  imageContainer: {
    position: "relative",
  },
  sourceBadge: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "rgba(3, 3, 3, 0.64)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  sourceText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});
export default ArticleCard;
