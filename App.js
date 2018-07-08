import React, { Component } from "react";
import { View } from "react-native";
import DefaultRouter from "./src/navigation/defaultRouter";

if (!__DEV__) {
  console.log = () => {};
}

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <DefaultRouter />
      </View>
    );
  }
}
