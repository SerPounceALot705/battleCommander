import { StyleSheet } from "react-native";
import Login from "../Pages/login/login";
import Registration from "../Pages/registration/registration";
import Restore from "../Pages/restore/restore";
import Message from "../Pages/restore/message";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export default function LoginNavigation({ setToken }) {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen
          name="Login"
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
        >
          {(props) => <Login {...props} setToken={setToken} />}
        </Stack.Screen>
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
  );
}

const styles = StyleSheet.create({});
