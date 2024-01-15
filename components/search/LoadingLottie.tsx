import React, { useEffect, useRef } from 'react';
import LottieView from 'lottie-react-native';

export default function AnimationWithImperativeApi() {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();

  }, []);

  return (
    <LottieView
      ref={animationRef}
      style={{height:"100%",width:"100%"}}
      source={require("../../assets/lottie/loading.json")}
    />
  );
}