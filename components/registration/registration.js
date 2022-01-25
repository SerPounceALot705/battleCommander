import { StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react'; 
import { TextInput, Button } from 'react-native-paper';


export default function Registration() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
    
  return (

    <View style={styles.container}>
      <Text style={styles.textTitle}>Заполните поля для регистрации</Text>
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
       <TextInput
          mode={"outlined"}
          label="Confirm the password"
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          style={styles.textInput}
      />
        <Button mode="contained" style={styles.loginButton}>OK</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 1);',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: '25px',
    color: '#978665',
    fontWeight: 'bold',
    width: '80%',
    textAlign: 'center'
  },
  linkText: {
    fontSize: '14px',
    color: '#978665',
    fontWeight: 'normal'
  },
  logo: {
    height: '150px',
    width: '150px',
    marginBottom: '25px'
  },
  textInput: {
    height: '40px',
    width: '350px',
    marginTop: '25px',
    backgroundColor: '#000',
    borderWidth: '2px'
  },
  loginButton: {
    height: '56px',
    width: '350px',
    marginTop: '25px',
    paddingTop: '12px',
    marginBottom: '25px'
  }
});
