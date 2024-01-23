import { View, Text, Animated, Pressable, Platform } from "react-native";
import React, { useState } from "react";
import { SearchIcon } from "../Icon";
import { BlurView } from "expo-blur";
import { Link } from "expo-router";
import { useConsentStore } from "../../store/zustand";

export default function ConsentButton() {
  const [scaleValue] = useState(new Animated.Value(1));
  const setConsent = useConsentStore((state) => state.setConsent);
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
  const handlePress = () => {
    setConsent({
      isConsent: true,
    });
  };
  return (
    <Animated.View
      style={{ transform: [{ scale: scaleValue }], width: "100%" }}
    >
      <View
        style={{
          backgroundColor: "#09520F",

          flexDirection: "row",
          paddingHorizontal: 5,
          gap: 6,
          paddingVertical: 5,
          borderRadius: 10,

          marginTop: Platform.select({ ios: 5, android: 10 }),
          overflow: "hidden",
        }}
      >
        <Pressable
          onPress={handlePress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={{
            padding: 5,
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins",
              includeFontPadding: false,
              color: "white",
            }}
          >
            Accept
          </Text>
        </Pressable>
      </View>
    </Animated.View>
  );
}
