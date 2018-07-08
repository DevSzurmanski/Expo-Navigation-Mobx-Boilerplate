import { createStackNavigator } from "react-navigation";
import Welcome from "../containers/welcome";
import Welcome2 from "../containers/welcome2";

const defaultHeader = { headerTintColor: "#000000" };

const defaultRouter = createStackNavigator(
  {
    welcome: {
      screen: Welcome,
      navigationOptions: () => ({ header: null })
    },
    welcome2: {
      screen: Welcome2,
      navigationOptions: () => ({ header: null })
    }
  },
  { initialRouteName: "welcome" }
);

export default defaultRouter;
