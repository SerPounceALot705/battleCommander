import { StyleSheet, View, Image, Text } from "react-native";
import React from "react";
import { TextInput, Button } from "react-native-paper";
import { Switch } from "react-native-paper";

export default function Settings() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={styles.pageContainer}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require("../../assets/images/avatar.jpg")}
        />
        <Text style={styles.textName}>Name</Text>
      </View>
      <View style={styles.textInputContainer}>
        <View style={styles.switchContainer}>
          <Text style={styles.textSwitch}>Уведомления</Text>
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            color={"#978665"}
          />
        </View>
        <TextInput
          mode={"outlined"}
          label="Позывной"
          value={"Name Firstname"}
          style={styles.textInput}
        />
        <TextInput
          mode={"outlined"}
          label="Команда"
          style={styles.textInput}
          value={"Name of command"}
        />
        <Button mode="contained" style={styles.registrationButton}>
          Сохранить
        </Button>
      </View>
      <View style={styles.listContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    height: "100%",
    backgroundColor: "#000",
  },
  avatarContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  listContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  account: {
    backgroundColor: "#978665",
  },
  avatar: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    borderColor: "#978665",
    borderWidth: "3px",
    border: "solid",
    marginTop: "25px",
  },
  textName: {
    color: "#978665",
    marginTop: "15px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  textSwitch: {
    color: "#978665",
    fontSize: "15px",
    marginRight: "10px",
  },
  textInput: {
    height: "40px",
    width: "350px",
    marginTop: "25px",
    backgroundColor: "#000",
    borderWidth: "2px",
  },
  textInputContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  registrationButton: {
    height: "56px",
    width: "350px",
    marginTop: "25px",
    paddingTop: "12px",
    marginTop: "25px",
    marginBottom: "25px",
  },
  switchContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: "25px",
    width: "85%",
  },
});
