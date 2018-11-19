import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { restaurant_samples } from "../../data/sampleData"

class RestaurantsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = {
        title: "Restaurants List"
    }
    render() {
        return (

            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <ScrollView>
                        {restaurant_samples.map((item, index) => (
                            <TouchableOpacity onPress={() =>
                                this.props.navigation.navigate('SelectedRestaurant',
                                    {
                                        name: item.name,
                                        img: item.img,
                                        waitingTime: item.waitingTime,
                                    })} key={index}>
                                <View style={styles.insideScrollContainer} >
                                    <View style={styles.restaurantHolder}>
                                        <View style={styles.imageHolder}>
                                            <ImageBackground source={{ uri: item.img }} style={{
                                                width: '100%',
                                                height: '100%'
                                            }} />
                                        </View>
                                        <View style={styles.description}>
                                            <View style={styles.name}>
                                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                                                <Text style={{ fontSize: 12 }}>{item.type}</Text>
                                            </View>
                                            <View style={styles.readyButton}>
                                                <View style={styles.ready}>
                                                    <Text style={{ color: '#00b0ff', fontSize: 10 }}>{item.waitingTime}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </View >
        );
    }
}

export default RestaurantsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    insideScrollContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    restaurantHolder: {
        width: "90%",
        height: 200,
        backgroundColor: '#fff',
        marginBottom: 10
    },
    imageHolder: {
        width: "100%",
        height: 160,
        backgroundColor: '#f4511e',
    },
    name: {
        width: "60%",
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: "#fff"
    },
    ready: {
        width: "80%",
        height: 27,
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
    },
    icon: {
        width: '10%',
        backgroundColor: '#00BD57',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        width: '80%',
        backgroundColor: '#00BD57',
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 5,
    }
});