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

  return <View style={{ flex: 1 }} />;
}
