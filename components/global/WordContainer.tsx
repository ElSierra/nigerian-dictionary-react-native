import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { StarredIcon } from "../Icon";
import WrongButton from "./Wrong";

export default function WordContainer({
  word,

  origin,
  sentence,
  type,
  etymology,
  definition,
  fullword,
}: {
  word: string;

  origin: string;
  sentence: string;
  type: string;
  etymology: string;
  definition: string;
  fullword: string;
}) {
  const show = false;
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
    { word ? <View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <Text style={styles.word}>{word}</Text>
          <View style={{ flexDirection: "row", gap: 2 }}>
            <View style={[styles.tags, { backgroundColor: "green" }]}>
              <Text style={styles.tagsText}>{origin}</Text>
            </View>
            <View style={styles.tags}>
              <Text style={styles.tagsText}>{type}</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={[styles.meaning]}>{definition}</Text>
          {etymology && (
            <>
              <Text style={{ color: "#64AB00", fontFamily: "PoppinsBold" }}>
                Etymology:{" "}
              </Text>
              <Text style={[styles.meaning, { fontFamily: "PoppinsItalic" }]}>
                <Text>{etymology}</Text>
              </Text>
            </>
          )}
          <Text style={{ color: "red", fontFamily: "PoppinsBold" }}>
            Sentence:{" "}
          </Text>
          <Text style={[styles.meaning, { fontFamily: "PoppinsItalic" }]}>
            <Text>{sentence}</Text>
          </Text>
        </View>

        <Pressable style={{ position: "absolute", right: 0, padding: 10 }}>
          <StarredIcon size={20} color={"white"} />
        </Pressable>
        <WrongButton />
      </View>:<Text
      style={{
        color: "white",
        fontFamily: "PoppinsBold",
        fontSize: 16,
        textAlign: "center",
      }}
      >
        No word found
        </Text>}
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
