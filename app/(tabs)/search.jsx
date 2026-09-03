import { View, StyleSheet } from "react-native";
import { Text, TextInput } from "react-native-paper";
import React, { useState } from "react";
export default function SearchScreen() {
  const [search, setSearch] = useState("");

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        paddingTop: 50,
      }}
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search With Meta AI"
          mode="outlined"
          value={search}
          onChangeText={setSearch}
          style={styles.input}
          outlineStyle={styles.inputOutline}
          left={<TextInput.Icon icon="magnify" />}
        />

        <Text style={styles.text}>Filter</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
    alignItems: "center",
    gap: 14,
  },

  input: {
    width: "82%",
    height: 42,
    backgroundColor: "#f5f5f5",
    fontSize: 14,
  },

  inputOutline: {
    borderRadius: 23,
    borderWidth: 0,
  },
});
