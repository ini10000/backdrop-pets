import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import MyTabs from "./src/routes/MyTabs";

export default function App() {
  const [fontsLoaded] = useFonts({
    SFPRO: require("./assets/fonts/SFPRO.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <MyTabs />
    </NavigationContainer>
  );
}
