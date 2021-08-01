import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import History from "./History";
import Notifications from "./Notifications";
import Account from "./Account";
import { Ionicons } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
const Tab = createBottomTabNavigator();
const TabBar = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#3b82f6",
        inactiveTintColor: "#919FAC",
        style: {
          position: "absolute",
          borderTopWidth: 0,
          elevation: 0,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          height: 80,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName:
            | "ios-add"
            | "ios-home"
            | "ios-time"
            | "ios-person"
            | "ios-notifications"
            | undefined;
          let iconsSize = size;
          if (route.name === "Inicio") {
            iconName = "ios-home";
            iconsSize = focused ? size + 6 : size;
          }
          if (route.name === "Historico") {
            iconName = "ios-time";
            iconsSize = focused ? size + 6 : size;
          }
          if (route.name === "Notificacoes") {
            iconName = "ios-notifications";
            iconsSize = focused ? size + 6 : size;
          }
          if (route.name === "Conta") {
            iconName = "ios-person";
            iconsSize = focused ? size + 6 : size;
          }
          return <Ionicons name={iconName} size={iconsSize} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="Historico" component={History} />
      <Tab.Screen name="Notificacoes" component={Notifications} />
      <Tab.Screen name="Conta" component={Account} />
    </Tab.Navigator>
  );
};

export default TabBar;
