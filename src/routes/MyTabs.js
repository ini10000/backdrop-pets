import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Cat from "../../assets/icons/Cat";
import Heart from "../../assets/icons/Heart";
import tw from "../lib/tailwind";
import All from "../screens/All";
import Favourites from "../screens/Favourites";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
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
  );
};

export default MyTabs;
