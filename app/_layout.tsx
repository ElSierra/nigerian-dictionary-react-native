import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { ImageBackground, useColorScheme, useWindowDimensions } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsBold : require('../assets/fonts/Poppins-Bold.ttf'),
    PoppinsSemiBold : require('../assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsMedium : require('../assets/fonts/Poppins-Medium.ttf'),
    PoppinsLight : require('../assets/fonts/Poppins-Light.ttf'),
    PoppinsThin : require('../assets/fonts/Poppins-Thin.ttf'),
    PoppinsExtraLight : require('../assets/fonts/Poppins-ExtraLight.ttf'),
    PoppinsItalic : require('../assets/fonts/Poppins-Italic.ttf'),
    PoppinsExtraBold : require('../assets/fonts/Poppins-ExtraBold.ttf'),
    PoppinsBlack : require('../assets/fonts/Poppins-Black.ttf'),

    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
const dimensions = useWindowDimensions()
  return (
    <ThemeProvider value={DarkTheme}>
  <ImageBackground
      source={require("../assets/images/background.jpg")}
      imageStyle={{ opacity: 0.8 }}
      style={{ flex: 1, height: dimensions.height }}
    >
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false,   contentStyle: { backgroundColor: "transparent" }, }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
      </ImageBackground>
    </ThemeProvider>
  );
}
