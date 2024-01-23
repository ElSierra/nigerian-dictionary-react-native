import { ReactNode, useCallback, useEffect, useState } from "react";
import Animated, {
  FadeInUp,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { ImageBackground, StyleProp, View, ViewStyle } from "react-native";

export default function AnimatedScreen({
  children,
  style,
}: {
  children: ReactNode;
  style?: ViewStyle;
}) {
  const [rendered, setRendered] = useState(false);
  const opacity = useSharedValue(0); // Shared value to control the opacity of the animated view

  const handleSetRendered = useCallback(() => {
    setRendered(true);
  }
  , []);

  function callback() {
    "worklet";
    runOnJS(handleSetRendered)();
  }

  useFocusEffect(
    useCallback(() => {
      setRendered(true);

      // Animate the opacity to 1 when the component is focused
      opacity.value = withSpring(1, undefined,callback);

      return () => {
        // Animate the opacity to 0 when the component is unfocused
        opacity.value = withSpring(0, )
      };
    }, [])
  );

  const animatedStyle = useAnimatedStyle(() => {
    // Interpolate the opacity based on the shared value
    const animatedOpacity = interpolate(opacity.value, [0, 1], [0, 1]);

    return {
      opacity: animatedOpacity,
    };
  });

  return (
    <View style={{ flex: 1, backgroundColor: "transparent" }}>
      <Animated.View style={[{ flex: 1, backgroundColor: "transparent" }, animatedStyle]}>
        {rendered && children}
      </Animated.View>
    </View>
  );
}
