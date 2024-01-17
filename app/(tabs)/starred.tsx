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
  }) => {
    return (
      <Animated.View
        key={"b"}
        style={[{ marginBottom: 0 }]}
        entering={!initialLoad ?FadeInDown.delay(500).springify(): undefined}
        exiting={FadeOutDown.springify()}
      >
        <WordContainer {...item} />
      </Animated.View>
    );
  };
  const dimensions = useWindowDimensions();
  const searchesList = useHistoryStore((state) => state.searches);
  return (
    <AnimatedScreen style={{ flex: 1 }}>
      <FlatList
        data={searchesList}
        extraData={searchesList}
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
