import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

/* ---------------- CARD ---------------- */

const ActivityCard = ({ name, message }) => {
  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{name.charAt(0)}</Text>
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.name}>{name}</Text>

        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};

/* ---------------- ALL ---------------- */

const AllTab = () => {
  return (
    <View style={styles.screen}>
      <ActivityCard name="Ali" message="Liked your post" />

      <ActivityCard name="Hassan" message="Started following you" />

      <ActivityCard name="Hussain" message="Commented on your post" />

      <ActivityCard name="Ahmed" message="Shared your reel" />
    </View>
  );
};

/* ---------------- PRIMARY ---------------- */

const PrimaryTab = () => {
  return (
    <View style={styles.screen}>
      <ActivityCard name="Ali" message="Liked your post" />

      <ActivityCard name="Hassan" message="Started following you" />
    </View>
  );
};

/* ---------------- GENERAL ---------------- */

const GeneralTab = () => {
  return (
    <View style={styles.screen}>
      <ActivityCard name="Hussain" message="Commented on your post" />

      <ActivityCard name="Ahmed" message="Shared your reel" />
    </View>
  );
};

/* ---------------- REQUEST ---------------- */

const RequestTab = () => {
  return (
    <View style={styles.screen}>
      <ActivityCard name="Usman" message="Wants to follow you" />

      <ActivityCard name="Hamza" message="Wants to follow you" />
    </View>
  );
};

/* ---------------- ACTIVITY SCREEN ---------------- */

const ActivityScreen = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#00458a",
          tabBarInactiveTintColor: "#666",

          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: "600",
            textTransform: "none",
          },

          tabBarIndicatorStyle: {
            backgroundColor: "#00458a",
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
        <Tab.Screen name="All" component={AllTab} />

        <Tab.Screen name="Primary" component={PrimaryTab} />

        <Tab.Screen name="General" component={GeneralTab} />

        <Tab.Screen name="Request" component={RequestTab} />
      </Tab.Navigator>
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 24,
  },

  screen: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 4,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 6,
    padding: 10,
    borderRadius: 12,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#8a6500",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  cardContent: {
    marginLeft: 12,
  },

  name: {
    color: "#000",
    fontSize: 15,
    fontWeight: "700",
  },

  message: {
    color: "#666",
    fontSize: 13,
    marginTop: 4,
  },
});