import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import { BlurView } from "expo-blur";
import { StarredIcon } from "../Icon";
import WrongButton from "./Wrong";
import StarButton from "./StarButton";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CustomBottomSheetModal from "./CustomBottomSheet";
import { useSearchStore } from "../../store/zustand";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

function WordContainer({
  word,
  id,
  origin,
  sentence,
  type,
  etymology,
  definition,
  fullword,
  errorMsg,
}: {
  word: string;
  id: string;
  origin: string;
  sentence: string;
  type: string;
  etymology: string;
  definition: string;
  fullword: string;
  errorMsg?: string;
}) {
  const mutation = useMutation({
    mutationFn: (newSearch: string) => {
      return axios.post(`${process.env.EXPO_PUBLIC_API_URL}/v1/reSearch`, {
        message: newSearch,
      });
    },
    onSuccess: (data) => {
      addSearches(data.data);
    },
    onError: (error: any) => {
      console.log("err", error?.response?.data);
      addSearches({
        id: "1",
        word: "Error",
        origin: "Error",
        sentence: "Error",
        type: "Error",
        etymology: "Error",
        definition: "Error",
        fullword: "Error",
        errorMsg: error?.response?.data?.message,
      });
    },
  });
  const removeSearch = useSearchStore((state) => state.removeSearches);
  const removeContent = () => {
    removeSearch(id);
    mutation.mutate(word);
  };

  const render = useMemo(() => {
    if (errorMsg) {
      return (
        <View>
          <Text
            style={{
              color: "white",
              fontFamily: "PoppinsBold",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            {errorMsg}
          </Text>
        </View>
      );
    }
    if (!word) {
      return (
        <View>
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
        </View>
      );
    }
    return (
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
              <Text selectionColor={"green"} selectable style={styles.tagsText}>
                {origin}
              </Text>
            </View>
            <View style={styles.tags}>
              <Text selectionColor={"green"} selectable style={styles.tagsText}>
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

        <StarButton
          search={{
            word,
            sentence,
            id,
            origin,
            fullword,
            definition,
            type,
            etymology,
          }}
        />
        <WrongButton onPress={removeContent} />
      </View>
    );
  }, []);

  return (
    <View
      key={id}
      style={{
        transform:
          Platform.OS === "android" ? [{ rotateY: "180deg" }] : undefined,
      }}
    >
      <View
        key={id}
        style={{
          backgroundColor: "#282828",
          gap: 10,
          overflow: "hidden",
          padding: 10,
          borderRadius: 20,
        }}
      >
        {render}
      </View>
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
function addSearches(data: any) {
  throw new Error("Function not implemented.");
}
