import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { ValidationEmail, ValidationPassword } from "../../components/extensions/validation"

export default function Registration({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [isValidEmail, setValidEmail] = useState(true);
  const [isValidPassword, setValidPassword] = useState(true);

  const [isShowPassword, setShowPassword] = useState(true);
  const [isShowConfirmPassword, setShowConfirmPassword] = useState(true);

  const checkInputValue = () => {
    ValidationEmail(email) ? setValidEmail(true) : setValidEmail(false); 
    ValidationPassword(password) ? setValidPassword(true) : setValidPassword(false); 
       
    if (ValidationEmail(email) && ValidationPassword(password) && (password == confirmPassword))
    {
      console.log("gooo")
    }    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Заполните поля для регистрации</Text>
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
      <TextInput
        mode={"outlined"}
        label="Confirm the password"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        style={styles.textInput}
        secureTextEntry={isShowConfirmPassword}  
        error={!isValidPassword}   
        right={
          <TextInput.Icon
            name={isShowConfirmPassword ? "eye" : "eye-off"}
            style={styles.iconEye}
            onPress={() => setShowConfirmPassword(!isShowConfirmPassword)}
          />
        }
        
      />
      {password == confirmPassword ? null : (
        <Text style={styles.textError}>Пароли не совпадают</Text>
      )}
      <Button
        mode="contained"
        style={styles.loginButton}
        onPress={() => checkInputValue()}
      >
        OK
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
  textError: {
    marginTop: "10px",
    fontSize: "12px",
    color: "#ba0d0d",
    fontWeight: "normal",
    textAlign: "left",
    width: "84%",
  },
  iconEye: {
    position: "absolute",
    top: "12px",
  },
  logo: {
    height: "150px",
    width: "150px",
    marginBottom: "25px",
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
