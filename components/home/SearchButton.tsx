import { View, Text, Animated, Pressable, Platform } from "react-native";
import React, { useState } from "react";
import { SearchIcon } from "../Icon";
import { BlurView } from "expo-blur";
import { Link } from "expo-router";

export default function HomeSearchButton({ onPress }: { onPress: () => void }) {
  const [scaleValue] = useState(new Animated.Value(1));
  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      tension: 100,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Animated.View
      style={{ transform: [{ scale: scaleValue }], width: "100%" }}
    >
      <BlurView
        style={{
          backgroundColor: "#00000080",

          flexDirection: "row",
          paddingHorizontal: 5,
          gap: 6,
          paddingVertical: 5,
          borderRadius: 10,


          marginTop: Platform.select({ ios: 5, android: 10 }),
          overflow: "hidden",
        }}
      >
        <Link href="search" asChild>
          <Pressable
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={{
              padding: 5,
              width:"100%",
              flexDirection: "row",
              alignItems: "center",
              gap:10,
             
              borderRadius: 5,
            }}
          >
            <SearchIcon size={20} color={"white"} />
            <Text
              style={{
                fontFamily: "Poppins",
                includeFontPadding: false,
                color: "white",
              }}
            >
            Make a search Now ?
            </Text>
          </Pressable>
        </Link>
      </BlurView>
    </Animated.View>
  );
}
