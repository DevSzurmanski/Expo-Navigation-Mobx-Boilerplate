import { observable, action } from "mobx";
import NavigationStore from "./navigationStore";

export default class RootStore {
  constructor() {
    this.navigationStore = new NavigationStore();
    this.rootStore = this;
    this.stores = {
      navigationStore: this.navigationStore,
      rootStore: this
    };
  }
  @observable globalLoading = false;

  @action
  setLoading = loading => {
    this.globalLoading = loading;
  };
}
