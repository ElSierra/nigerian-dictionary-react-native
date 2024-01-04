import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TextInput,
  useColorScheme,
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

export default function TabOneScreen() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  const backgroundColor = Colors[colorScheme ?? "light"].background;
  console.log(
    "🚀 ~ file: index.tsx:10 ~ TabOneScreen ~ backgroundColor:",
    backgroundColor
  );
  return (
    <>
      <ImageBackground
        source={require("../../assets/images/background.jpg")}
        imageStyle={{ opacity: 0.5 }}
        style={{ flex: 1 }}
      >
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
            <Text
              style={{
                color: "#fff",
                fontFamily: "PoppinsBold",
                fontSize: 40,
                height:40,
                includeFontPadding: false,
              }}
            >
          Kini
            </Text>
            <Text style={{fontFamily:"Poppins",color:"white"}}>What is?</Text>
          </View>
        </HeaderContainer>
        <FlatList renderItem={()=><WordContainer />} contentContainerStyle={{padding:20, gap:10}} data={[0,1,2,3,4,]}/>
     
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
