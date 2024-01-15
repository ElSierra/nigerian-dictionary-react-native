import { ReactNode } from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HeaderContainer({ children }: { children: ReactNode }) {
  const insets = useSafeAreaInsets();
  const dimensions = useWindowDimensions();
  return (
    <View
      style={{
        height: dimensions.height/2,
        paddingTop: insets.top,
        backgroundColor: "#47D16373",
        width: "100%",
        gap: 20,
        justifyContent:"center",
        paddingBottom: 20,
        paddingHorizontal: 10,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
 
      }}
    >
      <View
        style={{
          backgroundColor: "#47D16300",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </View>
    </View>
  );
}
