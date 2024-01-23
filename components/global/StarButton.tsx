import { View, Text, Animated, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { SearchIcon, StarredIcon } from "../Icon";
import { AntDesign } from "@expo/vector-icons";
import { Search, useHistoryStore } from "../../store/zustand";
export default function StarButton({ search }: { search: Search }) {
  const [scaleValue] = useState(new Animated.Value(1));
  const [isStarred, setIsStarred] = useState(false);
  const history = useHistoryStore((state) => state.searches);

  const starHistory = useHistoryStore((state) => state.addSearches);
  const starRemoveHistory = useHistoryStore((state) => state.removeSearches);

  useEffect(() => {
    const isStarred = history.some((item) => item.id === search?.id);
    setIsStarred(isStarred);
  }, [history]);
  const handlePress = () => {
    const isStarred = history.some((item) => item.id === search?.id);
    if (isStarred) {
      starRemoveHistory(search.id);
      return;
    }
    starHistory(search);
  };

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
      style={{
        transform: [{ scale: scaleValue }],
        position: "absolute",
  
        
        right: 0,
        padding: 5,
      }}
    >
      <Pressable
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={{
          borderRadius: 9999,
        }}
      >
        {
          <AntDesign
            name={isStarred ? "star" : "staro"}
            size={24}
            color="#47BBA2"
          />
        }
      </Pressable>
    </Animated.View>
  );
}
