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
  Layout,
  useAnimatedKeyboard,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useEffect, useState } from "react";
import LoadingLottie from "../../components/search/LoadingLottie";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  useDeviceStore,
  useErrorModalStore,
  useSearchStore,
} from "../../store/zustand";
import AnimatedScreen from "../../components/global/AnimatedView";
import { Keyboard } from "react-native";
export default function SearchScreen() {
  const searchesList = useSearchStore((state) => state.searches);
  const device = useDeviceStore((state) => state.device);
  const addSearches = useSearchStore((state) => state.addSearches);
  const [canLoad, setCanLoad] = useState(false);

  const mutation = useMutation({
    mutationFn: (newSearch: string) => {
      return axios.post(`${process.env.EXPO_PUBLIC_API_URL}/v1/search`, {
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

      Keyboard.dismiss();
    },
  });
  console.log(process.env.EXPO_PUBLIC_API_URL);
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
    mutation.mutate(searchText);
  };
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setCanLoad(true);
    }, 100); // Delay of 2000 milliseconds (2 seconds)
    setInitialLoad(false);

    return () => {
      clearTimeout(delay); // Clear the timeout if the component unmounts before the delay completes
    };
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
    return <WordContainer {...item} />;
  };
  return (
    <AnimatedScreen style={{ flex: 1 }}>
      <Animated.View style={[translateStyle, { flex: 1 }]}>
        <Animated.FlatList
          data={searchesList}
          initialNumToRender={10}
          itemLayoutAnimation={!initialLoad ? Layout.springify() : undefined}
          removeClippedSubviews
          contentContainerStyle={{
            paddingHorizontal: 10,
            paddingTop: 60,
            paddingBottom: 400,
            gap: 10,
          }}
          ListHeaderComponent={
            <View>
              {mutation.isPending && (
                <Animated.View
                  key={"a"}
                  entering={
                    !initialLoad ? FadeInDown.delay(500).springify() : undefined
                  }
                  exiting={FadeOutDown.springify()}
                  style={{ height: 200, alignItems: "center", width: "100%" }}
                >
                  <LoadingLottie />
                </Animated.View>
              )}
            </View>
          }
          keyboardShouldPersistTaps="handled"
          inverted
          renderItem={renderItem}
        />

        <View
          style={{
            paddingHorizontal: 10,
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          {device.isHighEnd ? (
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
          ) : (
            <View
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
            </View>
          )}
        </View>
      </Animated.View>
    </AnimatedScreen>
  );
}
