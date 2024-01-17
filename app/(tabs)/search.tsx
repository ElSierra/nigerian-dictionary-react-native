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
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
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
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchStore } from "../../store/zustand";
import AnimatedScreen from "../../components/global/AnimatedView";

export default function SearchScreen() {
  const searchesList = useSearchStore((state) => state.searches);
  console.log("🚀 ~ SearchScreen ~ searchesList:", searchesList)
  const addSearches = useSearchStore((state) => state.addSearches);
  console.log("expo", process.env.EXPO_PUBLIC_API_URL);
  const mutation = useMutation({
    mutationFn: (newSearch: string) => {
      console.log("🚀 ~ SearchScreen ~ newSearch:", newSearch);
      return axios.post(`${process.env.EXPO_PUBLIC_API_URL}/v1/search`, {
        message: newSearch,
      });
    },
  });

  console.log("response from server",mutation.data?.data);
  const keyboard = useAnimatedKeyboard({ isStatusBarTranslucentAndroid: true });
  const translateStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: -keyboard.height.value }],
    };
  });

  const [searchText, setSearchText] = useState("");

  const onHandleChange = (text: string) => {
    setSearchText(text);
  };

  const handleSearch = () => {
    console.log(searchText);
    mutation.mutate(searchText);
  };
  const [initialLoad, setInitialLoad] = useState(true);
  console.log("🚀 ~ SearchScreen ~ initialLoad:", initialLoad)

  useEffect(() => {
    // After the initial mount, set initialLoad to false
    setInitialLoad(false);
  }, []); 
 
  useEffect(() => {
    if (mutation.data?.data) {
      addSearches(mutation.data?.data);
    }
  }, [mutation.data?.data]);

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
        entering={!initialLoad ? FadeInDown.delay(500).springify(): undefined}
        exiting={FadeOutDown.springify()}
      >
        <WordContainer {...item} />
      </Animated.View>
    );
  };
  return (
    <AnimatedScreen style={{ flex: 1 }}>
      <Animated.View style={[translateStyle, { flex: 1 }]}>
        <FlatList
          data={searchesList}
          extraData={searchesList}
          removeClippedSubviews
          contentContainerStyle={{
            paddingHorizontal: 10,
            
            paddingBottom: 400,
            gap: 10,
          }}
          ListHeaderComponent={
            <View>
              {mutation.isPending&&<Animated.View
                key={"a"}
                entering={!initialLoad ? FadeInDown.delay(500).springify(): undefined}
                exiting={FadeOutDown.springify()}
                style={{ height: 200, alignItems: "center", width: "100%" }}
              >
                <LoadingLottie />
              </Animated.View>}
            </View>
          }
          keyboardShouldPersistTaps="handled"
          inverted
          renderItem={renderItem}
        />
        <View style={{ paddingHorizontal: 10 }}>
          <BlurView
            style={{
              backgroundColor: "#00000080",

              width: "100%",
              flexDirection: "row",
              paddingHorizontal: 10,
              gap: 6,
              paddingVertical: 10,
              borderRadius: 10,
              marginTop: 10,
              marginBottom: 10,

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
              value={searchText}
              onChangeText={onHandleChange}
              cursorColor={"white"}
              placeholderTextColor={"#9C9C9C"}
              placeholder="Type word or phrase"
            />
            <SearchButton onPress={handleSearch} />
          </BlurView>
        </View>
      </Animated.View>
    </AnimatedScreen>
  );
}
