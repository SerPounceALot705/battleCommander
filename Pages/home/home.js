import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { List } from 'react-native-paper';

export default function Home() {
  return (
    <View>
      <Text style={styles.textTitle}>BattleCommander</Text>
      <Image
        style={styles.logo}
        source={require("../../assets/images/Logo.png")}
      />
      <List.Item
      style={styles.list} 
        title = "First Item"
        left={props => <List.Icon {...props} icon="account" style={styles.account} />}
      />
      <List.Item
      style={styles.list} 
        title = "Second Item"
        left={props => <List.Icon {...props} icon="account" style={styles.account} />}
      />
      <List.Item
      style={styles.list} 
        title = "Third Item"
        left={props => <List.Icon {...props} icon="account" style={styles.account} />}
      />
    </View>
  );
}


const styles = StyleSheet.create({
    list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    account: {
        backgroundColor: '#978665'
    }

});