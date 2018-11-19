import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { reviews } from "../../../data/sampleData"

import Icon from "react-native-vector-icons/Ionicons";

class PlaceReviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = {
        title: "Place Reviews"
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.hr}></View>
                    <View style={styles.reviewCount}>
                        <View style={styles.reviewText}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}> 23 Reviews </Text>
                        </View>
                        <View style={styles.reviewStars}>
                            <Icon name="md-star" size={20} color="#ffd600" />
                            <Icon name="md-star" size={20} color="#ffd600" />
                            <Icon name="md-star" size={20} color="#ffd600" />
                            <Icon name="md-star" size={20} color="#ffd600" />
                            <Icon name="md-star" size={20} color="#eee" />
                        </View>
                    </View>
                    <View style={styles.hr}></View>

                    {reviews.map((item, index) => (
                        <View style={styles.customerReview} key={index}>
                            <View style={styles.restaurantContainer}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                    <Image source={{ uri: item.img }} style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 50,
                                    }} />
                                </View>

                                <View style={styles.customerName}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                                    <Text style={{ fontSize: 12 }}>{item.date} </Text>
                                </View>
                                <View style={styles.customerStars}>
                                    <Icon name="md-star" size={20} color="#ffd600" />
                                    <Icon name="md-star" size={20} color="#ffd600" />
                                    <Icon name="md-star" size={20} color="#ffd600" />
                                    <Icon name="md-star" size={20} color="#ffd600" />
                                    <Icon name="md-star" size={20} color="#ffd600" />
                                </View>
                            </View>

                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 14 }}>{item.review}</Text>

                            </View>
                        </View>

                    ))}
                </ScrollView>
            </View>
        );
    }
}

export default PlaceReviews;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    hr: {
        width: "100%",
        height: 1,
        backgroundColor: "#eee",
        marginBottom: 5
    },
    reviewCount: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5
    },
    reviewText: {
        width: "75%",
        height: 45,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    reviewStars: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    restaurantContainer: {
        width: "100%",
        height: 45,
        flexDirection: 'row'
    },
    customerReview: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 15,
        marginRight: 15,
        marginLeft: 15
    },
    customerName: {
        width: "60%",
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    customerStars: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 5
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