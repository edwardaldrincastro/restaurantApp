import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import FoodMenu from "../screens/Nearby/NearbyTab/FoodMenu";
import PlaceDetails from "../screens/Nearby/NearbyTab/PlaceDetails";
import PlaceReviews from "../screens/Nearby/NearbyTab/PlaceReviews";


export default SelectedTabNavigator = createMaterialTopTabNavigator({
    FoodMenu: FoodMenu,
    PlaceDetails: PlaceDetails,
    PlaceReviews: PlaceReviews
  },
    {
      initialRouteName: 'PlaceReviews',
      tabBarOptions: {
        activeTintColor: '#00BD57',
        inactiveTintColor: '#4f4f4f',
        labelStyle: {
          fontSize: 11,
          fontWeight: 'bold'
        },
        style: {
          backgroundColor: '#fff',
          elevation: 0,
        },
        tabStyle: {
            height: 40,
            borderBottomColor: "#fff",
            borderBottomWidth: 2
        }
      }
    },
  );
  