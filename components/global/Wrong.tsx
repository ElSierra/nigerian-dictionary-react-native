import { View, Text, Animated, Pressable } from "react-native";
import React, { useState } from "react";
import { SearchIcon } from "../Icon";

export default function WrongButton({onPress}:{onPress:()=>void}) {
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
    <Animated.View style={{transform: [{scale:scaleValue}], alignSelf:"flex-end"}}>
        <Pressable
        onPress={onPress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={{
            paddingVertical: 5,
            paddingHorizontal:10,
            backgroundColor: "#AA3E00",
            borderRadius: 9999,
          }}
        >
         <Text style={{fontFamily:"Poppins", includeFontPadding:false, color:"white"}}>Wrong?</Text>
        </Pressable>
    </Animated.View>
  );
}
