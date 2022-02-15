import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Pages/home/home";
import BottomTabMenu from "./BottomTabMenu";
export default function HomeNavigation() {
  return (
    <NavigationContainer>
      <BottomTabMenu />
    </NavigationContainer>
  );

  /*return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Домашняя страница",
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
        </Stack.Navigator>
      </NavigationContainer>
    );-*/
}
