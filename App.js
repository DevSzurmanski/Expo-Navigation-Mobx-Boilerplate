import React, { Component } from "react";
import { View } from "react-native";
import { Provider, observer } from "mobx-react/native";
import DefaultRouter from "./src/navigation/defaultRouter";
import { RootStore } from "./src/stores";

if (!__DEV__) {
  console.log = () => {};
}

@observer
export default class App extends Component {
  constructor() {
    this.rootStore = new RootStore();
  }
  render() {
    return (
      <Provider {...this.rootStore.stores}>
        <DefaultRouter ref={this.rootStore.stores.navigationStore.createRef} />
      </Provider>
    );
  }
}
