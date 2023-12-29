import { StyleSheet, TextInput, useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SearchIcon } from "../../components/Icon";

export default function TabOneScreen() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  const backgroundColor = Colors[colorScheme ?? "light"].background;
  console.log(
    "🚀 ~ file: index.tsx:10 ~ TabOneScreen ~ backgroundColor:",
    backgroundColor
  );
  return (
    <View style={[styles.container]}>
      <StatusBar style="light" />
      <View
        style={{
          paddingTop: insets.top + 20,
          backgroundColor: "#008751",
          width: "100%",
          gap:20,
          paddingBottom: 20,
          paddingHorizontal: 10,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <View style={{ backgroundColor: "#008751",width:"100%", justifyContent:"center",alignItems:"center" }}>
          <Text
            style={{
              color: "#fff",
              fontFamily: "PoppinsBold",
              fontSize: 20,
              includeFontPadding: false,
            }}
          >
            9ja Dictionary
          </Text>
        </View>

        <View
          style={{
            backgroundColor: Colors[colorScheme ?? "light"].textInput,
            height: 50,
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
        >
          <SearchIcon size={20} color={"#003F23"} />
          <Text
            style={{
              color: "#003F23",
              fontFamily: "Poppins",
              includeFontPadding: false,
            }}
          >
            Search for Word or phrase
          </Text>
        </View>
      </View>
    </View>
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
