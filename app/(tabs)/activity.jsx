import { StyleSheet, View, Text, Image } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";

const Activity = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search or Ask Meta AI"
          mode="outlined"
          value={search}
          onChangeText={setSearch}
          style={styles.input}
          outlineStyle={styles.inputOutline}
          left={<TextInput.Icon icon="magnify" />}
        />

        <Text style={styles.text}>Filter</Text>
      </View>

      <View style={styles.statusContainer}>
        <View style={styles.statusItem}>
          <View style={styles.status}>
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=12" }}
              style={styles.statusImage}
            />
          </View>
          <Text style={styles.statusText}>Ali</Text>
        </View>

        <View style={styles.statusItem}>
          <View style={styles.status}>
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=5" }}
              style={styles.statusImage}
            />
          </View>
          <Text style={styles.statusText}>Hassan</Text>
        </View>

        <View style={styles.statusItem}>
          <View style={styles.status}>
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=8" }}
              style={styles.statusImage}
            />
          </View>
          <Text style={styles.statusText}>Hussain</Text>
        </View>
      </View>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 25,
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 12,
    alignItems: "center",
    gap: 10,
  },

  input: {
    width: "80%",
    height: 46,
    backgroundColor: "#f5f5f5",
    fontSize: 14,
  },

  inputOutline: {
    borderRadius: 23,
    borderWidth: 0,
  },

  text: {
    color: "#3197f0",
    fontSize: 14,
    fontWeight: "bold",
  },

  statusContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 45,
    gap: 15,
  },

  statusItem: {
    alignItems: "center",
    width: 80,
  },

  status: {
    width: 80,
    height: 80,
    borderRadius: 40,
    padding: 3,
    backgroundColor: "#506c24",
  },

  statusImage: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
    resizeMode: "cover",
  },
  statusText: {
    marginTop: 6,
    fontSize: 14,
    color: "#222",
  },
});
