import React, { Component } from 'react';
import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import LandingScreen from "./src/screens/LandingScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import SignInScreen from "./src/screens/SignInScreen";
import ForgotPasswordModal from "./src/components/forgotPasswordModal";
import RestaurantStack from "./src/navigators/restaurantStack";

export default class App extends Component {
  render() {
    return (
      <SwitchNav />
    );
  }
}
const AuthStackNavigator = createStackNavigator({
  Landing: LandingScreen,
  SignIn: SignInScreen,
  Register: RegisterScreen,
  ForgotModal: ForgotPasswordModal,
}, {
    navigationOptions: {
    header: null
    }
  },
  {
    initialRouteName: 'Landing'
  })
const SwitchNav = createSwitchNavigator({
  App: AuthStackNavigator,
  Entry: RestaurantStack,
},
  {
    initialRouteName: 'App'
  });
