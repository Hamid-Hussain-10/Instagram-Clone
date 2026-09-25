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
});
