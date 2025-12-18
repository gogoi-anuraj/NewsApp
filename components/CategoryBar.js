import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'

const CategoryBar = ({categories, selected, onSelect}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ paddingVertical: 10, paddingLeft: 10 }}
    >
      {categories.map((category) => {
        const isActive = category === selected;

        return (
          <Pressable
            key={category}
            onPress={() => onSelect(category)}
            style={{
              paddingVertical: 8,
              paddingHorizontal: 16,
              marginRight: 10,
              borderRadius: 20,
              backgroundColor: isActive ? "#000" : "#eee"
            }}
          >
            <Text
              style={{
                color: isActive ? "#fff" : "#000",
                fontWeight: "500"
              }}
            >
              {category}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  )
}

export default CategoryBar