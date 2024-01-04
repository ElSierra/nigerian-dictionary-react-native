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

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
   sceneContainerStyle={{backgroundColor:"black"}}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor:"white",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: Platform.select({ ios: 75, android: 70 }),
          paddingBottom: 20,
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
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color, size }) => (
            <HistoryIcon size={size - 5} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
