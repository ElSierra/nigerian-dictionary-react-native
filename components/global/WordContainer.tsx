import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { StarredIcon } from "../Icon";
import WrongButton from "./Wrong";

export default function WordContainer() {
  const show = false
  return (
    <BlurView
      intensity={100}
      tint="dark"
      style={{
       

        backgroundColor: "#676767B3",
        gap: 10,
        overflow: "hidden",
        padding: 10,
        borderRadius: 20,
      }}
    >
      
 <View>
        <View style={{ justifyContent: "center", alignItems: "center" ,marginBottom:40}}>
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
          <Text style={[styles.meaning,]}>
            Iyanuoluwa means 'Miracle of God' in Yoruba. It's a unisex name given
            to children to express a miraculous blessing.
          </Text>
          <Text style={{ color: "#64AB00",fontFamily:"PoppinsBold" }}>Etymology: </Text>
          <Text style={[styles.meaning, { fontFamily: "PoppinsItalic" }]}>
            <Text>Iyanu means miracle and oluwa means God</Text>
          </Text>
          <Text style={{ color: "red" ,fontFamily:"PoppinsBold"}}>Sentence: </Text>
          <Text style={[styles.meaning, { fontFamily: "PoppinsItalic" }]}>
            <Text>Iyanuoluwa went to the market</Text>
          </Text>
        </View>
  
        <Pressable style={{ position: "absolute", right: 0, padding: 10 }}>
          <StarredIcon size={20} color={"white"} />
        </Pressable>
        <WrongButton/>
 </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  word: {
    color: "white",
    fontFamily: "PoppinsBold",
    fontSize: 20,
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
