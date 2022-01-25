import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";

export default function Login({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>BattleCommander</Text>
      <Image style={styles.logo} source={require('../../assets/images/Logo.png')} />
      <TextInput
          mode={"outlined"}
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.textInput}
      />
      <TextInput
          mode={"outlined"}
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.textInput}
      />
      <Button mode="contained" style={styles.button}>
        Войти
      </Button>
      <Button
        mode="contained"
        style={styles.registrationButton}
        onPress={() => navigation.navigate("Registration")}
      >
        Зарегистрироваться
      </Button>
      <Text style={styles.linkText}>
        Забыли пароль?<Text> Восстановить</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 1);",
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    fontSize: "25px",
    color: "#978665",
    fontWeight: "bold",
    marginBottom: '25px'
  },
  linkText: {
    fontSize: "14px",
    color: "#978665",
    fontWeight: "normal",
  },
  logo: {
    height: "250px",
    width: "250px",
    marginBottom: "25px",
  },
  textInput: {
    height: "40px",
    width: "350px",
    marginTop: "25px",
    backgroundColor: "#000",
    borderWidth: "2px",
  },
  button: {
    height: "56px",
    width: "350px",
    marginTop: "25px",
    paddingTop: "12px",
    marginBottom: "25px",
  },
  registrationButton: {
    height: "56px",
    width: "350px",
    marginTop: "25px",
    paddingTop: "12px",
    marginTop: '0',
    marginBottom: "25px"
  }
});
