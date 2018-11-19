import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { Header, } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: null,
            password: null,
        };
    }

    clickHere = () => {

        this.props.navigation.navigate('ForgotModal')
    }
    emailInputHandler = (input) => {
        this.setState({
            emailAddress: input
        })
    }
    passwordInputHandler = (input) => {
        this.setState({
            password: input
        })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header style={{ backgroundColor: "#fff" }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ width: '10%', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ justifyContent: 'flex-start', alignContent: 'center' }}>
                                <Icon name="md-arrow-back" size={25} color="#000" onPress={() => this.props.navigation.goBack()} />
                            </View>
                        </View>
                        <View style={{ width: '80%', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ backgroundColor: "#fff" }}>
                                <Text style={{ color: '#4f4f4f', fontWeight: 'bold' }}>SIGN IN</Text>
                            </View>
                        </View>
                        <View style={{ width: '10%', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                        </View>
                    </View>
                </Header>
                <KeyboardAvoidingView keyboardVerticalOffset={0} behavior="padding" enabled>
                    <View style={styles.container}>
                        <View style={styles.inputBox}>
                            <TextInput
                                placeholder="EMAIL ADDRESS"
                                underlineColorAndroid="#F6F6F5"
                                onChangeText={(val) => this.emailInputHandler(val)}
                                value={this.state.emailAddress} />
                        </View>
                        <View style={styles.inputBox}>
                            <TextInput
                                placeholder="PASSWORD"
                                underlineColorAndroid="#F6F6F5"
                                onChangeText={(val) => this.passwordInputHandler(val)}
                                value={this.state.password} />
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Entry')}>
                            <View style={styles.loginButton}>
                                <Text style={styles.buttonText}>LOG IN</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.forgotPassword}>
                            <Text style={styles.forgotPasswordText}>Forgot Password? </Text>
                            <TouchableOpacity onPress={() => this.clickHere()}>
                                <Text style={{ color: '#323232', fontSize: 12 }}> Click here</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.orText}>OR</Text>
                        <TouchableOpacity onPress={() => alert("FACEBOOK")}>
                            <View style={styles.facebookButton}>
                                <Text style={styles.buttonText}>CONNECT WITH FACEBOOK</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => alert("TWITTER")}>
                            <View style={styles.twitterButton}>
                                <Text style={styles.buttonText}>CONNECT WITH TWITTER</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: '40%', width: '100%', }}>
                        <ImageBackground source={require('../assets/fruitBowl2.jpg')} style={{
                            width: '100%',
                            height: '100%'
                        }}>
                            <View style={{ height: 2, width: "100%", opacity: 1, backgroundColor: '#fff' }} />
                            <View style={{ height: 2, width: "100%", opacity: 0.9, backgroundColor: '#fff' }} />
                            <View style={{ height: 2, width: "100%", opacity: 0.8, backgroundColor: '#fff' }} />
                            <View style={{ height: 2, width: "100%", opacity: 0.7, backgroundColor: '#fff' }} />
                            <View style={{ height: 2, width: "100%", opacity: 0.6, backgroundColor: '#fff' }} />
                            <View style={{ height: 2, width: "100%", opacity: 0.5, backgroundColor: '#fff' }} />
                            <View style={{ height: 2, width: "100%", opacity: 0.4, backgroundColor: '#fff' }} />
                            <View style={{ height: 2, width: "100%", opacity: 0.3, backgroundColor: '#fff' }} />
                            <View style={{ height: 2, width: "100%", opacity: 0.2, backgroundColor: '#fff' }} />
                            <View style={{ height: 2, width: "100%", opacity: 0.1, backgroundColor: '#fff' }} />
                        </ImageBackground>
                    </View>

                </KeyboardAvoidingView>
            </View>
        );
    }
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    keyboardContainer: {
        flex: 1,
    },
    inputBox: {
        width: 250,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F6F5',
        margin: 12
    },
    loginButton: {
        height: 40,
        width: 250,
        backgroundColor: '#00BD57',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    facebookButton: {
        height: 40,
        width: 250,
        backgroundColor: '#3748AF',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    twitterButton: {
        height: 40,
        width: 250,
        backgroundColor: '#009EE9',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    buttonText: {
        fontSize: 12,
        color: "#fff"
    },
    forgotPassword: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    forgotPasswordText: {
        color: '#323232',
        fontWeight: 'bold',
        fontSize: 12
    },
    orText: { 
        color: '#323232', 
        fontWeight: 'bold',
         fontSize: 12, 
         margin: 5 }

});
