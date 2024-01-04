import { View, Text } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

export default function TodayWordConatiner() {
  return (
    <View style={{borderTopLeftRadius:20}}>
      <BlurView style={{ padding: 10 }} intensity={50} >
        <Text style={{ color: "white" }}>Today's Word</Text>
      </BlurView>
    </View>
  );
}
