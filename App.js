import React, { Component } from "react";
import { Provider } from "mobx-react/native";
import { RootStore } from "./src/stores";
import RootApp from "./src/RootApp";

if (!__DEV__) {
  console.log = () => {};
}

export default class App extends Component {
  constructor() {
    super();
    this.rootStore = new RootStore();
  }
  render() {
    const { stores } = this.rootStore;
    return (
      <Provider {...stores}>
        <RootApp />
      </Provider>
    );
  }
}
