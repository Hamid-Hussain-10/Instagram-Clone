import { View, StyleSheet, Image, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.profileWrapper}>
          <Image
            source={require("../../assets/images/react-logo.png")}
            style={styles.image}
          />

          <View style={styles.addButton}>
            <Ionicons name="add" size={16} color="#ffffff" />
          </View>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Hamid Hussain</Text>

          <View style={styles.posts}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>25</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.statNumber}>250</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.statNumber}>2</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bio}>
        <Text style={styles.bioText}>Education</Text>
        <Text style={styles.bioText}>
          This is my bio. I am a software developer.
        </Text>
      </View>
      <View style={styles.hashtags}>
        <Text style={styles.hasText}>@educatio_10</Text>
      </View>
      <View style={styles.dashboardContainer}>
        <View style={styles.dashboard}>
          <Text style={styles.dashboardPara}>Professional Dashboard</Text>
          <Text style={styles.dashboardText}>20k Views in 24 hours</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },

  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  profileWrapper: {
    position: "relative",
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  addButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#010101",
    borderWidth: 2,
    borderColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },

  profileInfo: {
    marginLeft: 20,
    flex: 1,
  },

  name: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },

  posts: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  stat: {
    alignItems: "center",
    marginRight: 15,
  },

  statNumber: {
    fontSize: 16,
    fontWeight: "700",
  },

  statLabel: {
    fontSize: 13,
    color: "#555",
    marginTop: 2,
  },
  bio: {
    paddingHorizontal: 26,
    paddingTop: 10,
  },
  bioText: {
    fontSize: 14,
    color: "#6c6c6c",
    marginBottom: 5,
  },
  hashtags: {
    alignSelf: "flex-start",
    marginLeft: 26,
    marginTop: 8,
    backgroundColor: "#f5f4f4",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  hasText: {
    fontSize: 14,
    color: "#555",
    fontWeight: "500",
  },
  dashboardContainer: {
    marginHorizontal: 16,
    paddingHorizontal: 26,
    marginTop: 10,
    paddingTop: 10,
    backgroundColor: "#f5f5f5",
    paddingVertical: 10,
    borderRadius: 20,
  },
});
