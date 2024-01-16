import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Platform, Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import {
  HistoryIcon,
  HomeIcon,
  SearchIcon,
  StarredIcon,
} from "../../components/Icon";
import { BlurView } from "expo-blur";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      sceneContainerStyle={{ backgroundColor: "#000000A1" }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
      
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          overflow: "hidden",
          borderRadius: 20,
          borderWidth:1,
          borderColor:"#C9C9C900",
          position: "absolute",
          backgroundColor: "#121212",
          height: Platform.select({ ios: 80, android: 70 }),
          paddingBottom: Platform.select({ ios: 30, android: 20 }),
          elevation: 0,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          headerTitleAlign: "center",
          headerTitleStyle: {
            color: Colors[colorScheme ?? "light"].headerText,
          },
          headerStyle: {
            backgroundColor: "#008751",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },

          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size - 5} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarStyle: {
            
            height: Platform.select({ ios: 80, android: 70 }),
            paddingBottom: Platform.select({ ios: 30, android: 20 }),
            elevation: 0,
            paddingTop: 10,
          },
          tabBarIcon: ({ color, size }) => (
            <SearchIcon size={size - 5} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="starred"
        options={{
          title: "Starred",
          tabBarIcon: ({ color, size }) => (
            <StarredIcon size={size - 5} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",

          tabBarIcon: ({ color, size }) => (
            <HistoryIcon size={size - 5} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
