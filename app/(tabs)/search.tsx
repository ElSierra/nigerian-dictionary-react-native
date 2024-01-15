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

export default function SearchScreen() {
  const dimensions = useWindowDimensions();
  const [isLoaded, setIsLoaded] = useState(true);

  const mutation = useMutation({
    mutationFn: (newSearch: string) => {
      console.log("🚀 ~ SearchScreen ~ newSearch:", newSearch);
      return axios.post(`${process.env.EXPO_PUBLIC_API_URL}/v1/search`, {
        message: newSearch,
      });
    },
  });

  console.log(mutation.data?.data);
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

  const [data, setData] = useState({
    word: "",
    origin: "",
    sentence: "",
    type: "",
    etymology: "",
    definition: "",
    fullword: "",
  });
  console.log("🚀 ~ SearchScreen ~ data:", data);

  useEffect(() => {
    if (mutation.data?.data) {
      setData(mutation.data?.data);
    }
  }, [mutation.data?.data]);

  return (
    <View style={{ flex: 1, paddingHorizontal: 10 }}>
      <View style={{ flex: 1 }} />

      <Animated.View style={translateStyle}>
        {mutation.isPending? (
          <Animated.View
            key={"a"}
            entering={FadeInDown.delay(500).springify()}
            exiting={FadeOutDown.springify()}
            style={{ height: 400 }}
          >
            <LoadingLottie />
          </Animated.View>
        ) : (
          <Animated.View
            key={"b"}
            style={[{ marginBottom: 0 }]}
            entering={FadeInDown.delay(500).springify()}
            exiting={FadeOutDown.springify()}
          >
            <WordContainer {...data}/>
          </Animated.View>
        )}
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
      </Animated.View>
    </View>
  );
}
