import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

class ForgotPasswordModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
        };
    }

    emailInputHandler = (input) => {
        this.setState({
            emailAddress: input
        })
    }
    static navigationOptions={
        header: null
    }
    render() {
        return (
            <View style={styles.modalContainer}>
                <Icon name="md-close" size={25} color="#4f4f4f" onPress={() => this.props.navigation.goBack()} style={{ margin: 15 }} />
                <View style={{ width: 200, height: 200 }}>
                    <ImageBackground source={require('../assets/hamburger.png')} style={{
                        width: '100%',
                        height: '100%'
                    }} />
                </View>
                <Text style={styles.forgotPassword}>FORGOT YOUR PASSWORD?</Text>
                <View style={{ width: 240 }}>
                    <Text style={styles.enterMail}>Enter your email below to receive the instructions to reset your password</Text>

                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        placeholder="EMAIL ADDRESS"
                        underlineColorAndroid="#F6F6F5"
                        onChangeText={(val) => this.emailInputHandler(val)}
                        value={this.state.emailAddress} />
                </View>
                <TouchableOpacity onPress={() => alert('Passowrd recovery sent')}>
                    <View style={styles.sendPasswordButton}>
                        <Text style={styles.buttonText}>SEND PASSWORD</Text>
                    </View>
                </TouchableOpacity>


            </View>
        );
    }
}

export default ForgotPasswordModal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#fff"
    },
    inputBox: {
        width: 250,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F6F5',
        margin: 12
    },
    sendPasswordButton: {
        height: 40,
        width: 250,
        backgroundColor: '#00BD57',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    buttonText: {
        fontSize: 14,
        color: "#fff"
    },
    forgotPassword: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 10,
        color: "#4f4f4f"
    },
    enterMail: {
        fontSize: 14,
        textAlign: 'center',
        margin: 10,
        color: "#8e8e8e"
    }


})