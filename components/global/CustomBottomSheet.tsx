import { View, Text, StyleSheet } from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import { BlurView } from "expo-blur";

export type Ref = BottomSheetModal;

const CustomBottomSheetModal = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["25%", "50%", "100%"], []);
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
      handleIndicatorStyle={{display:"none"}}
      animationConfigs={{
        stiffness: 1000,
        damping: 500,
        mass: 3,
      }}
      index={1}
      style={{ borderRadius: 20, overflow: "hidden" }}
      enablePanDownToClose
      backgroundStyle={{ backgroundColor: "#AE5903" }}
      backdropComponent={renderBackdrop}
      snapPoints={snapPoints}
    >
      <Text>Hello</Text>
    </BottomSheetModal>
  );
});

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
});
export default CustomBottomSheetModal;
