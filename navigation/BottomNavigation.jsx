import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation } from "react-native-paper";
import { Image, StyleSheet, View } from "react-native";
import { CommonActions } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "../app/(tabs)/index";
import SearchScreen from "../app/(tabs)/search";
import ActivityScreen from "../app/(tabs)/activity";
import ProfileScreen from "../app/(tabs)/profile";
import ReelsScreen from "../app/(tabs)/reels";
const Tab = createBottomTabNavigator();

export default function BottomNavigationScreen() {
  return (
    <Tab.Navigator
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          labeled={false}
          activeIndicatorStyle={{
            backgroundColor: "transparent",
          }}
          style={{
            height: 60,
            backgroundColor: "#fff",
            borderTopWidth: 0.5,
            borderTopColor: "#dbdbdb",
            elevation: 0,
            alignItems: "center",
          }}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) =>
            descriptors[route.key].options.tabBarIcon?.({
              focused,
              color,
              size: 28,
            }) ?? null
          }
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];

            return options.tabBarLabel ?? options.title ?? route.name;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleAlign: "center",
          headerTitle: () => (
            <Image
              source={require("../assets/images/instagram1.jpg")}
              style={{
                width: 110,
                height: 35,
                resizeMode: "contain",
                marginRight: 20,
              }}
            />
          ),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={28}
              color={color}
              style={{ marginTop: -18 }}
            />
          ),

          headerLeft: () => (
            <Ionicons
              name="add"
              size={28}
              color="black"
              style={{ marginLeft: 5 }}
            />
          ),

          headerRight: () => (
            <Ionicons
              name="heart-outline"
              size={28}
              color="black"
              style={{ marginRight: 10 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={ReelsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="play-circle-outline"
              size={28}
              color={color}
              style={{ marginTop: -18 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          headerTitle: "UserIdName",
          headerTitleAlign: "center",
          headerTitleStyle:{
            fontSize: 18,
          },
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "paper-plane" : "paper-plane-outline"}
              size={28}
              color={color}
              style={{ marginTop: -18 }}
            />
          ),
          headerLeft: () => (
            <View style={styles.headerLeft}>
              <Ionicons name="briefcase-outline" size={28} />
              <Ionicons name="trending-up-outline" size={28} />
            </View>
          ),
          headerRight: () => (
            <View style={styles.headerRight}>
              <Ionicons name="ellipsis-horizontal-outline" size={28} />
              <Ionicons name="create-outline" size={28} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={28}
              color={color}
              style={{ marginTop: -18 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person-circle" : "person-circle-outline"}
              size={28}
              color={color}
              style={{ marginTop: -18 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    flexDirection: "row",
    alignItems: "start",
    gap: 8,
    marginLeft: 12,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "start",
    gap: 8,
    marginRight: 12,
  },
});