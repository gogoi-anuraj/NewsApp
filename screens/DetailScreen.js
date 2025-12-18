import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'

const DetailScreen = ({ route }) => {
  const { article } = route.params;
  return (
    <ScrollView
      style={styles.container}
    >

      {/* ARTICLE IMAGE */}
      <Image
        source={{ uri: article.urlToImage }}
        style={{
          width: "100%",
          height: 200,
          borderRadius: 5,
          alignItems:'center',
          justifyContent: 'center'
          

        }}
      />

      {/* TITLE */}
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          marginTop: 15
        }}
      >
        {article.title}
      </Text>

      {/* AUTHOR & SOURCE */}
      <Text style={{ color: "#555", marginTop: 8 }}>
        By {article.author || "Unknown"} • {article.source.name}
      </Text>

      {/* PUBLISHED DATE */}
      <Text style={{ color: "#777", marginTop: 4 }}>
        Published on {new Date(article.publishedAt).toDateString()}
      </Text>

      {/* DESCRIPTION */}
      <Text
        style={{
          fontSize: 16,
          marginTop: 15,
          lineHeight: 24
        }}
      >
        {article.description}
      </Text>

      {/* FULL CONTENT */}
      <Text
        style={{
          fontSize: 15,
          marginTop: 10,
          lineHeight: 22,
          color: "#333"
        }}
      >
        {article.content}
      </Text>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    contentContainerStyle:{ padding: 15 }
  },
})

export default DetailScreen