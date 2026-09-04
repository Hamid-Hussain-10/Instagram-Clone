import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import { Text } from "react-native-paper";
import React, { useState } from "react";
import SuggestedContents from "../../screens/SuggestedContents";

const suggestions = [
  "For You",
  "Football",
  "Software",
  "Personal Growth",
  "Technology",
  "AI",
  "React Native",
  "Business",
];

export default function SearchScreen() {
  const [selectedSuggestion, setSelectedSuggestion] = useState("For You");

  return (
    <View style={styles.container}>
      {/* Suggestions */}
      <View style={styles.suggestionWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.suggestionContainer}
        >
          {suggestions.map((item) => {
            const isSelected = selectedSuggestion === item;

            return (
              <Pressable
                key={item}
                onPress={() => setSelectedSuggestion(item)}
                style={[
                  styles.suggestionButton,
                  isSelected && styles.selectedSuggestion,
                ]}
              >
                <Text
                  style={[
                    styles.suggestionText,
                    isSelected && styles.selectedSuggestionText,
                  ]}
                >
                  {item}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      <SuggestedContents selectedCategory={selectedSuggestion} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },

  suggestionWrapper: {
    width: "100%",
    marginBottom: 0,
  },

  suggestionContainer: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    gap: 8,
  },

  suggestionButton: {
    height: 36,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },

  selectedSuggestion: {
    backgroundColor: "#8e8e8e",
  },

  suggestionText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#333",
  },

  selectedSuggestionText: {
    color: "#fff",
    fontWeight: "600",
  },
});
