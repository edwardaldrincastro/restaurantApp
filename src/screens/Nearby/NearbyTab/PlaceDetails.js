import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";


class PlaceDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = {
        title: "Place Details"
    }
    render() {
        return (
            <View style={styles.container}>
                <Icon name="md-settings" size={50} color={"#4f4f4f"} />
            </View>
        );
    }
}

export default PlaceDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});