import { View, Image, StyleSheet } from "react-native";
import { Avatar, IconButton, Text } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function PostItem({ item }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.user}>
          <Avatar.Image size={36} source={{ uri: item.profile }} />

          <Text variant="titleSmall" style={styles.username}>
            {item.username}
          </Text>
        </View>

        <IconButton icon="dots-horizontal" size={22} />
      </View>

      {/* Post Image */}
      <Image source={{ uri: item.image }} style={styles.postImage} />

      {/* Actions */}
      <View style={styles.actions}>
        <View style={styles.leftIcons}>
          <Ionicons name="heart-outline" size={28} />

          <Ionicons
            name="chatbubble-outline"
            size={26}
            style={{ marginLeft: 15 }}
          />

          <Ionicons
            name="paper-plane-outline"
            size={26}
            style={{ marginLeft: 15 }}
          />
        </View>

        <Ionicons name="bookmark-outline" size={28} />
      </View>

      {/* Likes */}
      <Text variant="titleSmall" style={styles.likes}>
        {item.likes} likes
      </Text>

      {/* Caption */}
      <Text style={styles.caption}>
        <Text style={{ fontWeight: "bold" }}>{item.username}</Text>{" "}
        {item.caption}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  user: {
    flexDirection: "row",
    alignItems: "center",
  },

  username: {
    marginLeft: 10,
    fontWeight: "600",
  },

  postImage: {
    width: "100%",
    height: 400,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingTop: 8,
    alignItems: "center",
  },

  leftIcons: {
    flexDirection: "row",
    alignItems: "center",
  },

  likes: {
    marginHorizontal: 12,
    marginTop: 5,
    fontWeight: "700",
  },

  caption: {
    marginHorizontal: 12,
    marginTop: 5,
  },
});
