
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createMaterialTopTabNavigator } from "expo-router/js-top-tabs";

const Tab = createMaterialTopTabNavigator();

const API_URL =
  "https://jsonplaceholder.typicode.com/photos?_limit=60";

const ContentGrid = ({ data, type = "image" }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.imageCard}>
        <Image
          source={{ uri: item.thumbnailUrl }}
          style={styles.image}
          resizeMode="cover"
        />

        {type === "video" && (
          <View style={styles.videoIcon}>
            <Ionicons name="play" size={10} color="#fff" />
          </View>
        )}

        {type === "repost" && (
          <View style={styles.repostIcon}>
            <Ionicons name="repeat" size={10} color="#fff" />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => String(item.id || index)}
      numColumns={3}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
    />
  );
};

const AllTab = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const loadContents = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Unable to load suggested content");
        }

        const data = await response.json();
        setContents(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    loadContents();
  }, []);

  return <ContentGrid data={contents} type="image" />;
};

const VideoTab = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Unable to load videos");
        }

        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.log("Video Error:", error);
      }
    };

    loadVideos();
  }, []);

  return <ContentGrid data={videos} type="video" />;
};

const Reposts = () => {
  const [reposts, setReposts] = useState([]);

  useEffect(() => {
    const loadReposts = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Unable to load reposts");
        }

        const data = await response.json();
        setReposts(data);
      } catch (error) {
        console.log("Repost Error:", error);
      }
    };

    loadReposts();
  }, []);

  return <ContentGrid data={reposts} type="repost" />;
};

const FollowTags = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const loadTags = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Unable to load tags");
        }

        const data = await response.json();
        setTags(data);
      } catch (error) {
        console.log("Tags Error:", error);
      }
    };

    loadTags();
  }, []);

  return <ContentGrid data={tags} type="image" />;
};

const ProfileTabs = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#8e8e8e",

          tabBarShowLabel: false,

          tabBarIndicatorStyle: {
            backgroundColor: "#000",
            height: 2,
          },

          tabBarStyle: {
            backgroundColor: "#fff",
            elevation: 0,
            shadowOpacity: 0,
          },

          tabBarPressColor: "transparent",
        }}
      >

        <Tab.Screen
          name="All"
          component={AllTab}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "grid" : "grid-outline"}
                size={22}
                color={color}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Videos"
          component={VideoTab}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "play-circle" : "play-circle-outline"}
                size={22}
                color={color}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Reposts"
          component={Reposts}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "repeat" : "repeat-outline"}
                size={22}
                color={color}
              />
            ),
          }}
        />

        <Tab.Screen
          name="FollowTags"
          component={FollowTags}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "person-add" : "person-add-outline"}
                size={22}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default ProfileTabs;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 6,
  },

  list: {
    backgroundColor: "#eee",
  },

  imageCard: {
    width: "32.8%",
    marginBottom: 1,
    overflow: "hidden",
    backgroundColor: "#eee",
    padding: 1,
  },

  image: {
    width: "100%",
    aspectRatio: 3 / 4,
    backgroundColor: "#eee",
  },

  videoIcon: {
    position: "absolute",
    right: 7,
    top: 7,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.55)",
    alignItems: "center",
    justifyContent: "center",
  },

  repostIcon: {
    position: "absolute",
    right: 7,
    top: 7,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.55)",
    alignItems: "center",
    justifyContent: "center",
  },
});
