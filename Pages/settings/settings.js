import { StyleSheet, View, Image, Text } from "react-native";
import React from "react";
import { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { Switch } from "react-native-paper";
import { ValidationPassword } from "../../components/extensions/validation";
import DropDown from "react-native-paper-dropdown";

export default function Settings() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [password, setPassword] = useState("");
  const [isValidPassword, setValidPassword] = useState(true);
  const [isShowPassword, setShowPassword] = useState(true);

  const checkInputValue = () => {
    !ValidationPassword(password)
      ? setValidPassword(false)
      : setValidPassword(true);

    if (password) {
      handleSubmit();
    }
  };

  const [showDropDown, setShowDropDown] = useState(false);
  const [gender, setGender] = useState();
  const genderList = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Others",
      value: "others",
    },
  ];
  

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={styles.pageContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.switchContainer}>
          <Text style={styles.textSwitch}>Уведомления</Text>
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            color={"#978665"}
          />
        </View>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={require("../../assets/images/avatar.jpg")}
          />
          <Text style={styles.textName}>Name</Text>
        </View>
      </View>
      <View style={styles.textInputContainer}>
        <Text style={styles.partition}>О себе</Text>
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
        <DropDown
          label={"Gender"}
          mode={"outlined"}
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          value={gender}
          setValue={setGender}
          list={genderList}
          style={styles.dropCityes}
        />
        <Button mode="contained" style={styles.submitButton}>
          Сохранить
        </Button>
      </View>
      <View style={styles.textInputContainer}>
        <Text style={styles.partition}>Изменить пароль</Text>
        <TextInput
          mode={"outlined"}
          label="Текущий пароль"
          style={styles.textInput}
        />
        <TextInput
          mode={"outlined"}
          label="Новый пароль"
          style={styles.textInput}
          value={password}
          onChangeText={(text) => setPassword(text)}
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
        <Button
          mode="contained"
          style={styles.submitButton}
          onPress={checkInputValue}
        >
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
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "90%",
  },
  avatarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
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
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    borderColor: "#978665",
    borderWidth: "3px",
    border: "solid",
    marginTop: "10px",
    order: "2",
  },
  textName: {
    color: "#978665",
    marginTop: "15px",
    fontSize: "20px",
    fontWeight: "bold",
    order: "1",
    marginRight: "10px",
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
    justifyContent: "center",
    borderTopColor: "#978665",
    borderTopWidth: "2px",
    width: "90%",
    position: "relative",
    marginTop: "25px",
  },
  submitButton: {
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
    justifyContent: "flex-end",
    marginTop: "25px",
  },
  partition: {
    position: "absolute",
    top: "-15px",
    left: "10px",
    color: "#978665",
    fontSize: "20px",
    fontWeight: "bold",
    backgroundColor: "#000",
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  iconEye: {
    position: "absolute",
    top: "12px",
  },
  dropCityes: {
    height: "40px",
    width: "350px",
    marginTop: "25px",
    backgroundColor: "#000",
    borderWidth: "2px"
  }
});
