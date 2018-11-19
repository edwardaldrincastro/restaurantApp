import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import SelectedDetails from "./SelectedDetails";
import Icon from "react-native-vector-icons/Ionicons";

class SelectedRestaurant extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("name", "no name"),
      headerLeft: <Icon name="md-arrow-back" size={25} color="#fff" onPress={() => navigation.goBack()} style={{ marginLeft: 15 }} />,
    }
  }

  render() {
    const { navigation } = this.props
    const name = navigation.getParam("name", "no name")
    const img = navigation.getParam("img", "no img")
    const waitingTime = navigation.getParam("waitingTime", "no waitingTime")
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={{ height: "70%", width: "90%" }}>
            <ImageBackground source={{ uri: img }} style={{
              width: '100%',
              height: '100%'
            }} />
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.readyButton}>
              <View style={styles.ready}>
                <Text style={{ color: '#00b0ff', fontSize: 12 }}>{waitingTime}</Text>
              </View>
            </View>
          </View>

        </View>
        <View style={{height: "50%", width: "100%" }}>
          <SelectedDetails />
        </View>
      </View>
    );
  }
}

export default SelectedRestaurant;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    height: "50%",
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    height: "20%",
    width: "90%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  ready: {
    height: 33,
    width: 150,
    borderWidth: 1,
    borderColor: '#00b0ff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  readyButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: "#fff",
    marginTop: 12
  },

});