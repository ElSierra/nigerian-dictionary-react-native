import { View ,Text, ImageBackground, Platform, useWindowDimensions, FlatList} from "react-native";
import HeaderContainer from "../../components/global/HeaderContainer";
import { TextInput } from "react-native-gesture-handler";
import { SearchIcon } from "../../components/Icon";
import { BlurView } from "expo-blur";
import WordContainer from "../../components/global/WordContainer";

export default function SearchScreen() {

  const dimensions = useWindowDimensions();
  return (
    <ImageBackground
    source={require("../../assets/images/background.jpg")}
    imageStyle={{ opacity: 0.5 }}
    style={{ flex: 1,height:dimensions.height }}
  >
    <HeaderContainer>
      <View style={{backgroundColor:"#00000080", height:40,width:"100%", flexDirection:"row",gap:6, borderRadius:20,marginTop:Platform.select({ios:5,android:10}), overflow:"hidden"}}>
        <BlurView style={{position:"absolute", top:0, bottom:0,left:0,height:"100%",width:"100%"}} intensity={100} />
        <View style={{padding:10, backgroundColor:"#30AA00",borderRadius:9999 }}>
          <SearchIcon size={20} color="#FFFFFF"/>
        </View>
        <TextInput style={{flex:1, fontSize:16,fontFamily:"Poppins",}} cursorColor={"black"} placeholder="Type word or phrase"/>
      </View>
    </HeaderContainer>

    <FlatList renderItem={()=><WordContainer />} contentContainerStyle={{padding:20, gap:10}} data={[0,1,2,3,4,]}/>
     
   </ImageBackground>
  );
}