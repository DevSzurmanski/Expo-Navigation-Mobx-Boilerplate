import React, { Component } from "react";
import { View } from "react-native";
import { observer, inject } from "mobx-react/native";
import DefaultRouter from "./navigation/defaultRouter";
import Loader from "./components/globalLoader";

@inject("rootStore", "navigationStore")
@observer
export default class RootApp extends Component {
  render() {
    const { rootStore, navigationStore } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <DefaultRouter ref={navigationStore.createRef} />
        <Loader globalLoading={rootStore.globalLoading} />
      </View>
    );
  }
}
