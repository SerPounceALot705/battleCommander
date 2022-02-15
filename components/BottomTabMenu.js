import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Pages/home/home";
import Game from "../Pages/game/game";
import Settings from "../Pages/settings/settings";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomTabMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: styles.tabBar,
        headerStyle: styles.header,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Game") {
            return (
              <Ionicons
                name={focused ? "game-controller" : "game-controller-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Settings") {
            return (
              <Ionicons
                name={focused ? "settings-sharp" : "settings-outline"}
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: "#978665",
        tabBarActiveTintColor: "#68593a",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Домашняя",
          headerStyle: {
            backgroundColor: "#0e0e0e",
            borderBottomColor: "#978665",
          },
          headerTintColor: "#978665",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="Game"
        component={Game}
        options={{
          title: "Игра",
          headerStyle: {
            backgroundColor: "#0e0e0e",
            borderBottomColor: "#978665",
          },
          headerTintColor: "#978665",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Настройки",
          headerStyle: {
            backgroundColor: "#0e0e0e",
            borderBottomColor: "#978665",
          },
          headerTintColor: "#978665",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#000",
    borderTopColor: "#978665",
    height: "60px",
    paddingBottom: "5px",
    paddingTop: "5px"
  },
});
