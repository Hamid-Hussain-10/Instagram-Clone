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
  }, [isActive]);

  return (
    <VideoView
      player={player}
      style={styles.video}
      contentFit="cover"
      nativeControls={false}
    />
  );
};


const ReelsScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reelsData = [
    {
      id: "1",
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      author: "tech_dev",
      likes: "12.5K",
      comments: "342",
      shares: "1.2K",
      caption: "Building the future with code 💻🔥",
    },
    {
      id: "2",
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      author: "developer",
      likes: "24.8K",
      comments: "567",
      shares: "3.4K",
      caption: "Coding mode: ON 💻⚡",
    },
    {
      id: "3",
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      author: "tech_world",
      likes: "8.3K",
      comments: "215",
      shares: "890",
      caption: "Setup goals ⌨️🔥",
    },
  ];

  const renderReel = ({ item, index }) => {
    const isActive = index === activeIndex;

    return (
      <View style={styles.reelContainer}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

        <ReelVideo videoUrl={item.videoUrl} isActive={isActive} />

        <View style={styles.overlay} />

        <View style={styles.topBar}>
          <Text style={styles.reelsTitle}>Reels</Text>

          <TouchableOpacity style={styles.cameraButton}>
            <MaterialCommunityIcons
              name="camera-outline"
              size={27}
              color="#fff"
            />
          </TouchableOpacity>
        </View>


        <View style={styles.actionButtons}>
          {/* LIKE */}

          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons
                name="heart-outline"
                size={31}
                color="#fff"
              />
            </View>

            <Text style={styles.actionLabel}>{item.likes}</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons
                name="comment-outline"
                size={29}
                color="#fff"
              />
            </View>

            <Text style={styles.actionLabel}>{item.comments}</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons
                name="send-outline"
                size={29}
                color="#fff"
              />
            </View>

            <Text style={styles.actionLabel}>{item.shares}</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={30}
                color="#fff"
              />
            </View>
          </TouchableOpacity>
        </View>


        <View style={styles.bottomContent}>

          <View style={styles.userRow}>
            <View style={styles.profileCircle}>
              <MaterialCommunityIcons name="account" size={22} color="#fff" />
            </View>

            <Text style={styles.username}>{item.author}</Text>

            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
          </View>


          <Text style={styles.caption}>{item.caption}</Text>


          <View style={styles.musicRow}>
            <MaterialCommunityIcons name="music-note" size={17} color="#fff" />

            <Text style={styles.musicText}>Original audio • {item.author}</Text>
          </View>
        </View>


        <View style={styles.videoIndicator}>
          <MaterialCommunityIcons name="play" size={16} color="#fff" />
        </View>
      </View>
    );
  };

  const onScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;

    const index = Math.round(scrollPosition / height);

    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={reelsData}
        renderItem={renderReel}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        decelerationRate="fast"
        removeClippedSubviews={false}
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
    width: width,
    height: height,
    backgroundColor: "#000",
    position: "relative",
  },

  video: {
    ...StyleSheet.absoluteFillObject,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.12)",
  },

  topBar: {
    position: "absolute",
    top: 45,
    left: 18,
    right: 18,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  reelsTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
    letterSpacing: 0.3,
  },

  cameraButton: {
    width: 42,
    height: 42,

    alignItems: "center",
    justifyContent: "center",

    borderRadius: 22,

    backgroundColor: "rgba(0,0,0,0.35)",
  },

  actionButtons: {
    position: "absolute",
    right: 12,
    bottom: 50,
    alignItems: "center",
  },

  actionButton: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 21,
  },

  iconCircle: {
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 23,
    backgroundColor: "rgba(0,0,0,0.25)",
  },

  actionLabel: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
    marginTop: 4,
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 3,
  },

  bottomContent: {
    position: "absolute",
    left: 16,
    right: 75,
    bottom: 50,
  },

  userRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  profileCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "rgba(255,255,255,0.25)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.8)",
  },

  username: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "800",
    marginRight: 12,
    textShadowColor: "rgba(0,0,0,0.7)",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 3,
  },

  followButton: {
    borderWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 6,
  },

  followText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },

  caption: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
    textShadowColor: "rgba(0,0,0,0.8)",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 3,
  },

  musicRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  musicText: {
    color: "#fff",
    fontSize: 12,
    marginLeft: 5,
    maxWidth: width - 100,
  },

  videoIndicator: {
    position: "absolute",

    top: height / 2 - 20,
    left: width / 2 - 20,

    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.35)",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
  },
});

export default ReelsScreen;
