import React, { Component } from 'react';
import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import LandingScreen from "./src/screens/LandingScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import SignInScreen from "./src/screens/SignInScreen";
import ForgotPasswordModal from "./src/components/forgotPasswordModal";
import RestaurantStack from "./src/navigators/restaurantStack";
import Icon from "react-native-vector-icons/Ionicons";

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
},
  {
    initialRouteName: 'Landing',
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Sign In',
        headerStyle: {
          backgroundColor: "#fff",
          elevation: 0

        },
        headerTintColor: "#323232",
        headerLeft: <Icon name="md-arrow-back" size={25} color="#000" onPress={() => navigation.goBack()} style={{ marginLeft: 15 }} />,
        headerTitleStyle: {
          width: '80%',
          marginHorizontal: 0,
          textAlign: 'center',
          fontSize: 16,
        },
      }
    }

  })
const SwitchNav = createSwitchNavigator({
  App: AuthStackNavigator,
  Entry: RestaurantStack,
},
  {
    initialRouteName: 'App'
  });
