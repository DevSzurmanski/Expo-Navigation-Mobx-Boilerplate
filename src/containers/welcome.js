import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import { inject } from "mobx-react/native";
import styles from "./styles/welcomeStyle";
import Localizable from "../lib/localizable";

@inject("navigationStore")
export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => this.props.navigationStore.navigate("welcome2")}
        >
          <Text>{Localizable.t("welcome")}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
