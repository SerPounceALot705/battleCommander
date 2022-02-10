import { StyleSheet } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import HomeNavigation from "./components/HomeNavigation";
import LoginNavigation from "./components/LoginNavigation";
import useToken from "./Pages/login/hooks/useToken";

export default function App() {

  const { token, setToken } = useToken();

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

  return (
    <PaperProvider theme={theme}>
      {!token ? <LoginNavigation setToken={setToken}/> :  <HomeNavigation/>}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
