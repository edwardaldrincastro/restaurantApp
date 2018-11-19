import React from "react"
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import RestaurantsList from "../screens/Nearby/RestaurantsList";
import RestaurantsMap from "../screens/Nearby/RestaurantsMap";
import SelectedRestaurant from "../screens/Nearby/SelectedRestaurant";
import Icon from "react-native-vector-icons/Ionicons";



const TabNavigator = createMaterialTopTabNavigator({
  RestaurantsList: RestaurantsList,
  RestaurantsMap: RestaurantsMap,
},
  {
    initialRouteName: 'RestaurantsList',
    tabBarOptions: {
      activeTintColor: '#00BD57',
      inactiveTintColor: '#4f4f4f',
      labelStyle: {
        fontSize: 13,
        fontWeight: 'bold'
      },
      style: {
        backgroundColor: '#fff',
        elevation: 0,
      },
      tabStyle: {
          height: 50,
          borderBottomColor: "#fff",
          borderBottomWidth: 2
      }
    }
  },
);


const RestaurantsListStack = createStackNavigator({
  RestaurantsList: TabNavigator,
  SelectedRestaurant: SelectedRestaurant
},
  {
    initialRouteName: 'RestaurantsList',
    navigationOptions: {
      title: 'Restaurants Nearby',
      headerStyle: {
        backgroundColor: "#00BD57",
 
      },
      headerTintColor: "white",
      headerLeft: <Icon name="md-menu" size={25} color="#fff" onPress={() => alert('menu')} style={{marginLeft: 15}}/>,
      headerRight: <Icon name="md-cart" size={25} color="#fff" onPress={() => alert('cart')} style={{marginRight: 15}} />,
      headerTitleStyle: {
        width: '100%',
        marginHorizontal: 0,
        textAlign: 'center',
        fontSize: 16,
      }
    }
  },
)

export default RestaurantsListStack;
