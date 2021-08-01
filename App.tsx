import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "react-native";
import TabBar from "./pages/TabBar";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar animated />
        <TabBar />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
