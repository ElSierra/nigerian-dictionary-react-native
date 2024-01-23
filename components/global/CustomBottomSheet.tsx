import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BlurView } from "expo-blur";
import { Search } from "../../store/zustand";
import LoadingLottie from "../search/LoadingLottie";
import Animated, { FadeIn } from "react-native-reanimated";

export type Ref = BottomSheetModal;

const CustomBottomSheetModal = forwardRef<Ref, { search: Search }>(
  ({ search }, ref) => {
    const snapPoints = useMemo(() => ["25%", "50%"], []);

    const [isPresented, setIsPresented] = React.useState(false);
    const handleSheetChanges = useCallback((index: number) => {
      console.log('handleSheetChanges', index);
      setIsPresented(index > 0);
    }, []);
    const renderBackdrop = useCallback(
      (props: any) => (
        <>
          <BottomSheetBackdrop
            {...props}
            opacity={0.8}
            pressBehavior={"close"}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
          />
        </>
      ),
      []
    );
    return (
      <BottomSheetModal
        ref={ref}
        onChange={handleSheetChanges}
        handleIndicatorStyle={{ display: "none" }}
        animationConfigs={{
          stiffness: 1000,
          damping: 500,
          mass: 3,
        }}
        index={1}
        style={{ borderRadius: 20, overflow: "hidden" }}
        enablePanDownToClose
        backgroundStyle={{ backgroundColor: "#282828" }}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
      >
        <>
          <View
            style={{
              backgroundColor: "#282828",
              gap: 10,
              overflow: "hidden",
              padding: 10,
              borderRadius: 20,
            }}
          >
            {search.word ? (
              <View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 40,
                  }}
                >
                  <Text selectable selectionColor={"green"} style={styles.word}>
                    {search.word}
                  </Text>

                {isPresented &&<Animated.View style={{height:300,width:300}} entering={FadeIn.springify()} ><LoadingLottie /></Animated.View>}
                </View>
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
        </>
      </BottomSheetModal>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
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

export default CustomBottomSheetModal;
