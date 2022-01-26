import { StyleSheet, View } from "react-native";
import Login from "./components/login/login.js";
import Registration from "./components/registration/registration.js";
import Restore from "./components/restore/restore.js";
import Message from "./components/restore/message.js";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: "#978665",
      text: "#978665",
      placeholder: "#978665",
    },
  };

  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: "Авторизация",
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
          <Stack.Screen
            name="Registration"
            component={Registration}
            options={{
              title: "Login page",
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
          <Stack.Screen
            name="Restore"
            component={Restore}
            options={{
              title: "Restore password",
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
          <Stack.Screen
            name="Message"
            component={Message}
            options={{
              title: "Restore",
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
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
