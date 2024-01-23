import { View, Text, StyleSheet, Animated } from "react-native";
import React, { useState } from "react";
import { Link, LinkProps } from "expo-router";

export default function ContainerLink({
  href,
  text,
}: {
  href: any;
  text: string;
}) {
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
    <Animated.View style={[styles.container,{transform: [{ scale: scaleValue }]}]}>
      <Link href={href} style={{paddingHorizontal:100,alignItems:"center",justifyContent:"center"}} onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <Text style={styles.text}>{text}</Text>
      </Link>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#212121",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontFamily: "Poppins",
  },
});
