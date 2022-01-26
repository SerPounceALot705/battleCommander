import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";

export default function Message({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        На указанную Вами почту, отправлена ссылка для восстановления пароля
      </Text>
      <Button
        mode="contained"
        style={styles.loginButton}
        onPress={() => navigation.navigate("Login")}
      >
        Вернуться на главную
      </Button>
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
    width: "80%",
    textAlign: "center",
  },
  linkText: {
    fontSize: "14px",
    color: "#978665",
    fontWeight: "normal",
  },
  textInput: {
    height: "40px",
    width: "350px",
    marginTop: "25px",
    backgroundColor: "#000",
    borderWidth: "2px",
  },
  loginButton: {
    height: "56px",
    width: "350px",
    marginTop: "25px",
    paddingTop: "12px",
    marginBottom: "25px",
  },
});
