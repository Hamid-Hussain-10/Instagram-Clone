import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#8e8e8e",

        tabBarStyle: {
          height: 60,
          backgroundColor: "#fff",
          borderTopWidth: 0.5,
          borderTopColor: "#dbdbdb",
          elevation: 0,
          shadowOpacity: 0,
        },

        tabBarItemStyle: {
          height: 60,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,

          headerTitle: () => (
            <Image
              source={require("../../assets/images/instagram1.jpg")}
              style={styles.logo}
            />
          ),

          headerLeft: () => (
            <Ionicons
              name="add"
              size={28}
              color="black"
              style={styles.homeHeaderLeft}
            />
          ),

          headerRight: () => (
            <Ionicons
              name="heart-outline"
              size={28}
              color="black"
              style={styles.homeHeaderRight}
            />
          ),

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={28}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="reels"
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <Ionicons
              name="play-circle-outline"
              size={28}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="activity"
        options={{
          headerShown: true,
          headerTitle: "UserIdName",
          headerTitleAlign: "center",

          headerTitleStyle: {
            fontSize: 18,
          },

          headerLeft: () => (
            <View style={styles.headerLeft}>
              <Ionicons
                name="briefcase-outline"
                size={28}
                color="black"
              />

              <Ionicons
                name="trending-up-outline"
                size={28}
                color="black"
              />
            </View>
          ),

          headerRight: () => (
            <View style={styles.headerRight}>
              <Ionicons
                name="ellipsis-horizontal"
                size={28}
                color="black"
              />

              <Ionicons
                name="create-outline"
                size={28}
                color="black"
              />
            </View>
          ),

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused
                  ? "paper-plane"
                  : "paper-plane-outline"
              }
              size={28}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={28}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused
                  ? "person-circle"
                  : "person-circle-outline"
              }
              size={28}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({

  logo: {
    width: 110,
    height: 35,
    resizeMode: "contain",
    marginRight: 20,
    alignSelf: "center",
  },

  homeHeaderLeft: {
    marginLeft: 5,
  },

  homeHeaderRight: {
    marginRight: 10,
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginLeft: 12,
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginRight: 12,
  },
});