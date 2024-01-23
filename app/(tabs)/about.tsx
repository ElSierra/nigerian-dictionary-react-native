import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TextInput,
  Image,
  useColorScheme,
  Animated,
  useWindowDimensions,
  Pressable,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SearchIcon } from "../../components/Icon";
import { BlurView } from "expo-blur";
import WordContainer from "../../components/global/WordContainer";
import HeaderContainer from "../../components/global/HeaderContainer";
import TodayWordConatiner from "../../components/home/TodayWordContainer";
import LoadingLottie from "../../components/search/LoadingLottie";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useCallback, useMemo, useRef, useState } from "react";
import { Link, router } from "expo-router";
import AnimatedScreen from "../../components/global/AnimatedView";
import CustomBottomSheetModal from "../../components/global/CustomBottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { ExternalLink } from "../../components/ExternalLink";
import ContainerLink from "../../components/global/ContainerLink";

export default function TabOneScreen() {
  const colorScheme = useColorScheme();
  const dimensions = useWindowDimensions();
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

  const handleNavigate = () => {
    router.push("/search");
  };

  return (
    <AnimatedScreen>
      <StatusBar style="light" />
      <HeaderContainer>
        <View
          style={{
            backgroundColor: "#47D16300",
            width: "100%",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={handleNavigate}
          >
            <Animated.View
              style={[
                {
                  backgroundColor: "transparent",
                  width: "100%",
                  transform: [{ scale: scaleValue }],
                  height: 100,
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <Image
                source={require("../../assets/images/icon.png")}
                style={{ height: 100, width: 100, borderRadius: 9999 }}
              />
              <View
                style={{
                  backgroundColor: "#47D16300",
                  height: "200%",
                  position: "absolute",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LoadingLottie />
              </View>
            </Animated.View>
          </Pressable>
          <View
            style={{
              backgroundColor: "#47D16300",
              width: "100%",

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: "PoppinsBold",
                fontSize: 40,
                height: 40,
                includeFontPadding: false,
              }}
            >
              Kíni
            </Text>
            <View
              style={{
                backgroundColor: "transparent",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "PoppinsItalic",
                  color: "white",
                  fontSize: 10,
                }}
              >
                Powered by ChatGPT
              </Text>
            </View>
          </View>
        </View>
      </HeaderContainer>
      <ScrollView
        style={{
          padding: 10,
          backgroundColor: "transparent",
          gap: 10,
        }}
      >
        <View style={{backgroundColor:"transparent",gap:10}}>
          <View style={styles.container}>
            <Text style={styles.text}>Developed by Isaac Ojo / Yodev</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>
              The "Kini" app, your ultimate nigerian dictionary  uses Openai GPT model to generate meanings, as such it
              might not be always right.
            </Text>
          </View>
          <ContainerLink href={"https://isaacojo.me"} text="My Portfolio" />
          <ContainerLink href={"https://twitter.com/hojoisaac"} text="Follow me" />
          <ContainerLink href={"https://yodev.org"} text="Yodev.org" />
        </View>
      </ScrollView>
    </AnimatedScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#212121",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontFamily: "Poppins",
  },
});
