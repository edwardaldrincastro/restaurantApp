import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            emailAddress: null,
            password: null,
            confirmPassword: null
        };
    }
    usernameInputHandler = (input) => {
        this.setState({
            username: input
        })
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
    confirmPasswordInputHandler = (input) => {
        this.setState({
            confirmPassword: input
        })
    }

    static navigationOptions = {
        title: "REGISTER NOW",
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                        <View style={styles.inputBox}>
                            <TextInput
                                placeholder="USERNAME"
                                underlineColorAndroid="#F6F6F5"
                                onChangeText={(val) => this.usernameInputHandler(val)}
                                value={this.state.username} />
                        </View>
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
                        <View style={styles.inputBox}>
                            <TextInput
                                placeholder="CONFIRM PASSWORD"
                                underlineColorAndroid="#F6F6F5"
                                onChangeText={(val) => this.confirmPasswordInputHandler(val)}
                                value={this.state.confirmPassword} />
                        </View>
                        <TouchableOpacity onPress={() => alert("REGISTERED")}>
                            <View style={styles.signUpButton}>
                                <Text style={styles.buttonText}>SIGN UP</Text>
                            </View>
                        </TouchableOpacity>
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
                </ScrollView>
            </View>
        );
    }
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingBottom: 25
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
    signUpButton: {
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
    orText: {
        color: '#323232',
        fontWeight: 'bold',
        fontSize: 12,
        margin: 15
    }

});
