import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { SearchIcon, StarredIcon } from "../Icon";
import WrongButton from "../global/Wrong";
import LoadingLottie from "../search/LoadingLottie";
import SearchButton from "../search/SearchButton";
import HomeSearchButton from "./SearchButton";
import StarButton from "../global/StarButton";
import { Link } from "expo-router";

export default function TodayWordConatiner() {
  return (
    <View>
      <BlurView
        intensity={100}
        tint="dark"
        style={{
          backgroundColor: "#6F6F6F80",
          gap: 10,
          overflow: "hidden",
          padding: 20,
          borderRadius: 20,
        }}
      >
        <View style={{}}>
          <Text style={styles.word}>Iyanuoluwa</Text>
          <View style={{ flexDirection: "row", gap: 2 }}>
            <View style={[styles.tags, { backgroundColor: "green" }]}>
              <Text style={styles.tagsText}>Yorùbá</Text>
            </View>
            <View style={styles.tags}>
              <Text style={styles.tagsText}>Word</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.meaning}>
            Iyanuoluwa means 'Miracle of God' in Yoruba. It's a unisex name
            given to children to express a miraculous blessing.
          </Text>
          <Text style={[styles.meaning, { fontFamily: "PoppinsItalic" }]}>
            <Text style={{ color: "green" }}>e: </Text>
            <Text>Iyanu means miracle and oluwa means God</Text>
          </Text>
          <Text style={[styles.meaning, { fontFamily: "PoppinsItalic" }]}>
            <Text style={{ color: "red" }}>s: </Text>
            <Text>Iyanuoluwa went to the market</Text>
          </Text>
        </View>
        <StarButton />
        <WrongButton />
      </BlurView>
      <View style={{width:"100%", alignItems:"center"}}>
        <HomeSearchButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  word: {
    color: "white",
    fontFamily: "PoppinsBold",
    fontSize: 16,

    height: 22,
  },
  tags: {
    paddingHorizontal: 4,
    backgroundColor: "orange",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  tagsText: { color: "white", fontSize: 10, fontFamily: "Poppins" },
  meaning: { color: "white", fontFamily: "PoppinsBold", fontSize: 12 },
});
