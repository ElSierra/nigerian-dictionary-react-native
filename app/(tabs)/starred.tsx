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
  FadeInRight,
  FadeOut,
  FadeOutDown,
  FadeOutLeft,
  FadeOutRight,
  Layout,
  SlideOutRight,
  useAnimatedKeyboard,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useEffect, useState } from "react";
import LoadingLottie from "../../components/search/LoadingLottie";
import { useHistoryStore, useSearchStore } from "../../store/zustand";
import AnimatedScreen from "../../components/global/AnimatedView";

export default function SearchScreen() {
  const [initialLoad, setInitialLoad] = useState(true);
  useEffect(() => {
    // After the initial mount, set initialLoad to false
    setInitialLoad(false);
  }, []);

  const renderItem = ({
    item,
    
  }: {
    item: {
      id: string;
      word: string;
      origin: string;
      sentence: string;
      type: string;
      etymology: string;
      definition: string;
      fullword: string;
    };
    index: number;
  }) => {
    return <WordContainer {...item} />;
  };
  
  const searchesList = useHistoryStore((state) => state.searches);
  return (
    <AnimatedScreen style={{ flex: 1 }}>
      <Animated.FlatList
        data={searchesList}
        itemLayoutAnimation={Layout.springify()}
        removeClippedSubviews
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingBottom: 50,
          paddingTop: 100,
          gap: 10,
        }}
        keyboardShouldPersistTaps="handled"
        inverted
        renderItem={renderItem}
      />
   
    </AnimatedScreen>
  );
}
