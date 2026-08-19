import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  StatusBar,
} from "react-native";

import { VideoView, useVideoPlayer } from "expo-video";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

/* ---------------- VIDEO COMPONENT ---------------- */

const ReelVideo = ({ videoUrl, isActive }) => {
  const player = useVideoPlayer(videoUrl, (player) => {
    player.loop = true;
    player.muted = false;
  });

  useEffect(() => {
    if (isActive) {
      player.play();
    } else {
      player.pause();
    }
  }, [isActive, player]);

  return (
    <VideoView
      player={player}
      style={styles.video}
      contentFit="cover"
      nativeControls={false}
    />
  );
};

/* ---------------- REELS SCREEN ---------------- */

const ReelsScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

const reelsData = [
  {
    id: "1",
    videoUrl:
      "https://isorepublic.com/wp-content/uploads/2019/01/iso-republic-free-video-003.mp4",
    author: "tech_dev",
    profileImage: "https://via.placeholder.com/40",
    likes: "12.5K",
    comments: "342",
    shares: "1.2K",
    caption: "Building the future with code 💻🔥",
  },
  {
    id: "2",
    videoUrl:
      "https://isorepublic.com/wp-content/uploads/2018/06/iso-republic-free-video-typing-macbook-laptop.mp4",
    author: "developer",
    profileImage: "https://via.placeholder.com/40",
    likes: "24.8K",
    comments: "567",
    shares: "3.4K",
    caption: "Coding mode: ON 💻⚡",
  },
  {
    id: "3",
    videoUrl:
      "https://isorepublic.com/wp-content/uploads/2019/01/iso-republic-free-video-017.mp4",
    author: "tech_world",
    profileImage: "https://via.placeholder.com/40",
    likes: "8.3K",
    comments: "215",
    shares: "890",
    caption: "Setup goals ⌨️🔥",
  },
];

  /* ---------------- RENDER REEL ---------------- */

  const renderReel = ({ item, index }) => {
    const isActive = index === activeIndex;

    return (
      <View style={styles.reelContainer}>
        <StatusBar barStyle="light-content" />

        {/* VIDEO */}

        <ReelVideo videoUrl={item.videoUrl} isActive={isActive} />

        {/* DARK OVERLAY */}

        <View style={styles.overlay} />

        {/* CONTENT */}

        <View style={styles.content}>
          {/* ---------------- TOP SECTION ---------------- */}

          {/* <View style={styles.topSection}>
            <TouchableOpacity style={styles.userInfo}>
              <Image
                source={{ uri: item.profileImage }}
                style={styles.profileImage}
              />

              <View>
                <Text style={styles.username}>{item.author}</Text>

                <TouchableOpacity>
                  <Text style={styles.followButton}>Follow</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>


            <TouchableOpacity>
              <MaterialCommunityIcons
                name="camera-outline"
                size={28}
                color="#fff"
              />
            </TouchableOpacity>
          </View> */}

          {/* ---------------- RIGHT ACTIONS ---------------- */}

          <View style={styles.actionButtons}>
            {/* LIKE */}

            <TouchableOpacity style={styles.actionButton}>
              <MaterialCommunityIcons
                name="heart-outline"
                size={32}
                color="#fff"
              />

              <Text style={styles.actionLabel}>{item.likes}</Text>
            </TouchableOpacity>

            {/* COMMENT */}

            <TouchableOpacity style={styles.actionButton}>
              <MaterialCommunityIcons
                name="comment-outline"
                size={30}
                color="#fff"
              />

              <Text style={styles.actionLabel}>{item.comments}</Text>
            </TouchableOpacity>

            {/* SHARE */}

            <TouchableOpacity style={styles.actionButton}>
              <MaterialCommunityIcons
                name="send-outline"
                size={30}
                color="#fff"
              />

              <Text style={styles.actionLabel}>{item.shares}</Text>
            </TouchableOpacity>

            {/* MORE */}

            <TouchableOpacity style={styles.actionButton}>
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={30}
                color="#fff"
              />
            </TouchableOpacity>
          </View>

          {/* ---------------- BOTTOM SECTION ---------------- */}

          <View style={styles.bottomSection}>
            {/* USER */}

            <View style={styles.authorRow}>
              <Text style={styles.bottomUsername}>{item.author}</Text>

              <TouchableOpacity>
                <Text style={styles.bottomFollow}>Follow</Text>
              </TouchableOpacity>
            </View>

            {/* CAPTION */}

            <Text style={styles.caption}>{item.caption}</Text>

            {/* MUSIC */}

            <View style={styles.musicRow}>
              <MaterialCommunityIcons
                name="music-note"
                size={16}
                color="#fff"
              />

              <Text style={styles.musicText}>
                Original audio • {item.author}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  /* ---------------- SCROLL ---------------- */

  const onScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;

    const index = Math.round(scrollPosition / height);

    setActiveIndex(index);
  };

  /* ---------------- SCREEN ---------------- */

  return (
    <View style={styles.container}>
      <FlatList
        data={reelsData}
        renderItem={renderReel}
        keyExtractor={(item) => item.id}
        pagingEnabled
        snapToInterval={height}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        removeClippedSubviews
      />
    </View>
  );
};

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  reelContainer: {
    width,
    height,
    backgroundColor: "#000",
  },

  /* VIDEO */

  video: {
    ...StyleSheet.absoluteFillObject,
  },

  /* OVERLAY */

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.15)",
  },

  /* CONTENT */

  content: {
    ...StyleSheet.absoluteFillObject,
    paddingHorizontal: 14,
    paddingTop: 50,
    paddingBottom: 90,
  },

  /* ---------------- TOP ---------------- */

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
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },

  username: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 3,
  },

  followButton: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },

  /* ---------------- ACTION BUTTONS ---------------- */

  actionButtons: {
    position: "absolute",
    right: 12,
    bottom: 145,
    alignItems: "center",
    gap: 22,
  },

  actionButton: {
    alignItems: "center",
    justifyContent: "center",
  },

  actionLabel: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "600",
    marginTop: 4,
  },

  /* ---------------- BOTTOM ---------------- */

  bottomSection: {
    position: "absolute",
    left: 14,
    right: 70,
    bottom: 85,
  },

  authorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  bottomUsername: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
    marginRight: 12,
  },

  bottomFollow: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },

  caption: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },

  /* MUSIC */

  musicRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  musicText: {
    color: "#fff",
    fontSize: 12,
    marginLeft: 5,
  },
});

export default ReelsScreen;
