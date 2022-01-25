import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setValidEmail] = useState(true);
  const [isValidPassword, setValidPassword] = useState(true);
  const [isShowPassword, setShowPassword] = useState(true);

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwodrRegex = /(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{6,}/g;

  const checkInputValue = () => {
    !(email.trim() && emailRegex.test(email))
      ? setValidEmail(false)
      : setValidEmail(true);
    !(password.trim() && passwodrRegex.test(password))
      ? setValidPassword(false)
      : setValidPassword(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>BattleCommander</Text>
      <Image
        style={styles.logo}
        source={require("../../assets/images/Logo.png")}
      />
      <TextInput
        mode={"outlined"}
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.textInput}
        error={!isValidEmail}
      />
      {isValidEmail ? null : (
        <Text style={styles.textError}>Введите email</Text>
      )}
      <TextInput
        mode={"outlined"}
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.textInput}
        secureTextEntry={isShowPassword}
        right={
          <TextInput.Icon
            name={isShowPassword ? "eye" : "eye-off"}
            style={styles.iconEye}
            onPress={() => setShowPassword(!isShowPassword)}
          />
        }
        error={!isValidPassword}
      />
      {isValidPassword ? null : (
        <Text style={styles.textError}>Введите пароль</Text>
      )}
      <Button mode="contained" style={styles.button} onPress={checkInputValue}>
        Войти
      </Button>
      <Button
        mode="contained"
        style={styles.registrationButton}
        onPress={() => navigation.navigate("Registration")}
      >
        Зарегистрироваться
      </Button>
      <Text
        style={styles.linkText}
        onPress={() => navigation.navigate("Restore")}
      >
        Забыли пароль?
        <Text> Восстановить</Text>
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
    marginBottom: "25px",
  },
  linkText: {
    fontSize: "14px",
    color: "#978665",
    fontWeight: "normal",
  },
  textError: {
    marginTop: "10px",
    fontSize: "12px",
    color: "#ba0d0d",
    fontWeight: "normal",
    textAlign: "left",
    width: "84%",
  },
  logo: {
    height: "250px",
    width: "250px",
    marginBottom: "25px",
  },
  iconEye: {
    position: "absolute",
    top: "12px",
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
    marginTop: "0",
    marginBottom: "25px",
  },
});
