import { StyleSheet, View } from "react-native";
import React from "react";
import { Avatar, Text, Badge } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const StoryItem = ({ image, name }) => {
  const isMyStory = name === "Your Story";

  return (
    <View style={styles.container}>
      {isMyStory ? (
        <View style={styles.avatarContainer}>
          <Avatar.Image size={80} source={{ uri: image }} />

          <Badge size={24} style={styles.badge}>
            +
          </Badge>
        </View>
      ) : (
        <LinearGradient
          colors={["#FEDA75", "#FA7E1E", "#D62976", "#9461a8", "#4F5BD5"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientRing}
        >
          <View style={styles.innerRing}>
            <Avatar.Image size={80} source={{ uri: image }} />
          </View>
        </LinearGradient>
      )}

      <Text variant="bodySmall" numberOfLines={1} style={styles.name}>
        {name}
      </Text>
    </View>
  );
};

export default StoryItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 10,
    width: 85,
  },

  avatarContainer: {
    width: 92,
    height: 92,
    borderRadius: 46,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  gradientRing: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
  },

  innerRing: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  badge: {
    position: "absolute",
    bottom: 2,
    right: 2,
    borderWidth: 1,
    borderColor: "#fff",
  },

  name: {
    marginTop: 6,
    textAlign: "center",
  },
});
