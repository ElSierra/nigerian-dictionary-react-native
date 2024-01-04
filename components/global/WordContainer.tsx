import { View, Text } from "react-native";

export default function WordContainer() {
  return (
    <View style={{ backgroundColor: "#121212D3", borderRadius: 20,padding:10 }}>
      <Text style={{ fontFamily: "PoppinsBold", fontSize: 20, color: "white", height:25}}>
        Omeiza
      </Text>
      <View style={{ flexDirection: "row", gap: 5,alignItems:"center" }}>
        <Text style={{ color: "white", fontFamily: "PoppinsItalic" ,fontSize:12}}>
          type:name,
        </Text>
        <Text style={{ color: "white", fontFamily: "PoppinsItalic",fontSize:12 }}>
          origin:Ebira
        </Text>
      </View>
    </View>
  );
}

