import React, { Component } from "react";
import { Provider } from "mobx-react/native";
import { RootStore } from "./src/stores";
import {
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from "react-native-responsive-screen";
import RootApp from "./src/RootApp";

if (!__DEV__) {
  console.log = () => {};
}

export default class App extends Component {
  constructor() {
    super();
    this.rootStore = new RootStore();
  }
  componentDidMount() {
    loc(this);
  }

  componentWillUnMount() {
    rol();
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
