import {
  View,
  Text,
  ImageBackground,
  Platform,
  useWindowDimensions,
  FlatList,
  Pressable,
} from "react-native";
import HeaderContainer from "../../components/global/HeaderContainer";
import { TextInput } from "react-native-gesture-handler";
import { SearchIcon } from "../../components/Icon";
import { BlurView } from "expo-blur";
import WordContainer from "../../components/global/WordContainer";
import SearchButton from "../../components/search/SearchButton";
import Animated, {
  FadeInDown,
  FadeOutDown,
  useAnimatedKeyboard,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useState } from "react";
import LoadingLottie from "../../components/search/LoadingLottie";

export default function SearchScreen() {
  const dimensions = useWindowDimensions();
  const [isLoaded,setIsLoaded] = useState()
  const keyboard = useAnimatedKeyboard({ isStatusBarTranslucentAndroid: true });
  const translateStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: -keyboard.height.value }],
    };
  });
  return (
    <ImageBackground
      source={require("../../assets/images/background.jpg")}
      imageStyle={{ opacity: 0.5 }}
      style={{ flex: 1, height: dimensions.height }}
    >
      <View style={{ flex: 1 }} />

      <Animated.View style={translateStyle}>
        <Animated.View style={{height:400}}>
          <LoadingLottie/>
        </Animated.View>
        <Animated.View
          style={[{ padding: 20, marginBottom: 0 },]}
          entering={FadeInDown.springify()}
          exiting={FadeOutDown.springify()}
        >
          <WordContainer />
        </Animated.View>
        <BlurView
          style={{
            backgroundColor: "#00000080",

            width: "100%",
            flexDirection: "row",
            paddingHorizontal: 10,
            gap: 6,
            paddingVertical: 10,
            borderRadius: 10,
            marginTop: Platform.select({ ios: 5, android: 10 }),
            overflow: "hidden",
          }}
        >
          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              fontFamily: "Poppins",
              color: "white",
            }}
            cursorColor={"white"}
            placeholderTextColor={"#9C9C9C"}
            placeholder="Type word or phrase"
          />
          <SearchButton />
        </BlurView>
      </Animated.View>
    </ImageBackground>
  );
}
