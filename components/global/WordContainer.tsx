import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { StarredIcon } from "../Icon";
import WrongButton from "./Wrong";
import StarButton from "./StarButton";

function WordContainer({
  word,
id,
  origin,
  sentence,
  type,
  etymology,
  definition,
  fullword,
}: {
  word: string;
id:string;
  origin: string;
  sentence: string;
  type: string;
  etymology: string;
  definition: string;
  fullword: string;
}) {
  const show = false;
  return (
    <View
      style={{
        backgroundColor: "#282828",
        gap: 10,
        overflow: "hidden",
        padding: 10,
        borderRadius: 20,
      }}
    >
      {word ? (
        <View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 40,
            }}
          >
            <Text selectable selectionColor={"green"} style={styles.word}>
              {word}
            </Text>
            <View style={{ flexDirection: "row", gap: 2 }}>
              <View style={[styles.tags, { backgroundColor: "green" }]}>
                <Text
                  selectionColor={"green"}
                  selectable
                  style={styles.tagsText}
                >
                  {origin}
                </Text>
              </View>
              <View style={styles.tags}>
                <Text
                  selectionColor={"green"}
                  selectable
                  style={styles.tagsText}
                >
                  {type}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text selectionColor={"green"} selectable style={[styles.meaning]}>
              {definition}
            </Text>
            {etymology && (
              <>
                <Text
                  selectable
                  style={{ color: "#64AB00", fontFamily: "PoppinsBold" }}
                >
                  Etymology:{" "}
                </Text>
                <Text
                  selectable
                  style={[styles.meaning, { fontFamily: "PoppinsItalic" }]}
                >
                  <Text>{etymology}</Text>
                </Text>
              </>
            )}
            <Text
              selectionColor={"green"}
              selectable
              style={{ color: "red", fontFamily: "PoppinsBold" }}
            >
              Sentence:{" "}
            </Text>
            <Text
              selectable
              selectionColor={"green"}
              style={[styles.meaning, { fontFamily: "PoppinsItalic" }]}
            >
              <Text>{sentence}</Text>
            </Text>
          </View>

         
          <StarButton search={{word,sentence,id,origin,fullword,definition,type,etymology}} />
          <WrongButton />
        </View>
      ) : (
        <Text
          style={{
            color: "white",
            fontFamily: "PoppinsBold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          No word found
        </Text>
      )}
    </View>
  );
}

export default React.memo(WordContainer);

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
