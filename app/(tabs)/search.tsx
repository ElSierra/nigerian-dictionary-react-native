import { View ,Text, ImageBackground} from "react-native";

export default function SearchScreen() {
  return (
    <ImageBackground
    source={require("../../assets/images/background.jpg")}
    imageStyle={{ opacity: 0.5 }}
    style={{ flex: 1 }}
  >
    <Text>Search Text</Text>
   </ImageBackground>
  );
}