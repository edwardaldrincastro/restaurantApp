import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

class LandingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={{ height: '60%', width: '100%', }}>
                        <ImageBackground source={require('../assets/jar.jpg')} style={{
                            width: '100%',
                            height: '100%'
                        }} />
                    </View>

                    <View style={{ height: '40%', width: '100%', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 5 }}>
                            <View style={styles.logo}>
                                <ImageBackground source={require('../assets/company_logo.png')} style={{
                                    width: '100%',
                                    height: '100%'
                                }} />
                            {/* <ImageBackground source={{uri: "http://foodsy.com.br/wp-content/uploads/2015/10/logo.png"}} style={{
                                    width: '100%',
                                    height: '100%'
                                }} /> */}
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                            <View style={styles.signUpButton}>
                                <Text style={styles.buttonText}>SIGN UP</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
                            <View style={styles.loginButton}>
                                <Text style={styles.buttonText}>LOG IN</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }
}

export default LandingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
    loginButton: {
        height: 40,
        width: 200,
        backgroundColor: '#323232',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    signUpButton: {
        height: 40,
        width: 200,
        backgroundColor: '#00BD57',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    buttonText: {
        fontSize: 13,
        color: "#fff"
    },
    logo: {
        height: 90,
        width: 200,
        margin: 5,
        marginLeft: 20
    }
});
