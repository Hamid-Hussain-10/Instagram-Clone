import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { Video } from "expo-av";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const ReelsScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reelsData = [
    {
      id: "1",
      videoUrl: "https://example.com/video1.mp4",
      author: "user1",
      profileImage: "https://via.placeholder.com/40",
      likes: "12.5K",
      comments: "342",
      shares: "1.2K",
      caption: "Amazing sunset view! 🌅",
    },
    {
      id: "2",
      videoUrl: "https://example.com/video2.mp4",
      author: "user2",
      profileImage: "https://via.placeholder.com/40",
      likes: "24.8K",
      comments: "567",
      shares: "3.4K",
      caption: "Dancing to the beat 💃",
    },
    {
      id: "3",
      videoUrl: "https://example.com/video3.mp4",
      author: "user3",
      profileImage: "https://via.placeholder.com/40",
      likes: "8.3K",
      comments: "215",
      shares: "890",
      caption: "Travel diaries ✈️",
    },
  ];

  const renderReel = ({ item, index }) => {
    const isActive = index === activeIndex;

    return (
      <View style={styles.reelContainer}>
        <Video
          source={{ uri: item.videoUrl }}
          style={styles.video}
          resizeMode="cover"
          isLooping
          shouldPlay={isActive}
          isMuted={false}
        />

        {/* Gradient overlay */}
        <View style={styles.overlay} />

        {/* User info and actions */}
        <View style={styles.content}>
          {/* Top section - User info */}
          <View style={styles.topSection}>
            <TouchableOpacity style={styles.userInfo}>
              <View
                style={[styles.profileImage, { backgroundColor: "#ddd" }]}
              />
              <View>
                <Text style={styles.username}>{item.author}</Text>
                <Text style={styles.followButton}>Follow</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Bottom section - Caption and actions */}
          <View style={styles.bottomSection}>
            <Text style={styles.caption}>{item.caption}</Text>

            {/* Action buttons */}
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.actionButton}>
                <MaterialCommunityIcons name="heart" size={28} color="white" />
                <Text style={styles.actionLabel}>{item.likes}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionButton}>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={28}
                  color="white"
                />
                <Text style={styles.actionLabel}>{item.comments}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionButton}>
                <MaterialCommunityIcons name="send" size={28} color="white" />
                <Text style={styles.actionLabel}>{item.shares}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionButton}>
                <MaterialCommunityIcons
                  name="dots-horizontal"
                  size={28}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const onScroll = (event) => {
    const scrollPos = event.nativeEvent.contentOffset.y;
    const index = Math.round(scrollPos / height);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={reelsData}
        renderItem={renderReel}
        keyExtractor={(item) => item.id}
        pagingEnabled
        scrollEventThrottle={16}
        onScroll={onScroll}
        snapToInterval={height}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  reelContainer: {
    height,
    width,
    backgroundColor: "#000",
  },
  video: {
    height: "100%",
    width: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  content: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  topSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  followButton: {
    color: "#0095f6",
    fontSize: 12,
    fontWeight: "600",
  },
  bottomSection: {
    justifyContent: "flex-end",
  },
  caption: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 16,
    lineHeight: 18,
    marginRight: 60,
  },
  actionButtons: {
    gap: 20,
  },
  actionButton: {
    alignItems: "center",
    marginBottom: 20,
  },
  actionLabel: {
    color: "#fff",
    fontSize: 11,
    marginTop: 4,
  },
});

export default ReelsScreen;
