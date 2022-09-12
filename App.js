import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import tw from "./src/lib/tailwind";
import Cat from "./assets/icons/Cat";
import Heart from "./assets/icons/Heart";
import Favourites from "./src/screens/Favourites";
import All from "./src/screens/All";

const Tab = createBottomTabNavigator();

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
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: tw`h-[107px]`,
          tabBarActiveTintColor: "#212227",
          tabBarInactiveTintColor: "#E5E5E5",
          tabBarLabelStyle: tw`relative bottom-[30px]`,
        }}
      >
        <Tab.Screen
          name="All"
          component={All}
          options={{
            tabBarLabel: "All Cats",
            tabBarIcon: ({ color, size }) => <Cat fill={color} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Favourites}
          options={{
            tabBarLabel: "Cats I like",
            tabBarIcon: ({ color, size }) => (
              <Heart fill={color} stroke={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
