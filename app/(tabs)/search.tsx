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

export default function SearchScreen() {
  const dimensions = useWindowDimensions();
  return (
    <ImageBackground
      source={require("../../assets/images/background.jpg")}
      imageStyle={{ opacity: 0.5 }}
      style={{ flex: 1, height: dimensions.height }}
    >
      <HeaderContainer>
        <View
          style={{
            backgroundColor: "#00000080",
       
            width: "100%",
            flexDirection: "row",
            paddingHorizontal:10,
            gap: 6,
            paddingVertical: 5,
            borderRadius: 10,
            marginTop: Platform.select({ ios: 5, android: 10 }),
            overflow: "hidden",
          }}
        >
         
          <TextInput
            style={{ flex: 1, fontSize: 16, fontFamily: "Poppins",color:"white" }}
            cursorColor={"white"}
            placeholderTextColor={"#9C9C9C"}
            placeholder="Type word or phrase"
          />
          <SearchButton />
        </View>
      </HeaderContainer>

      <FlatList
        renderItem={() => <WordContainer />}
        contentContainerStyle={{ padding: 20, gap: 10 }}
        data={[0, 1, 2, 3, 4]}
      />
    </ImageBackground>
  );
}
