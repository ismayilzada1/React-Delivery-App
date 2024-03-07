import React, {useState} from 'react';
import styles from './styles';
import {Pressable, Text, TextInput, View, KeyboardAvoidingView, Platform} from "react-native";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import {useAuth} from "../../context/AuthContext";
import {useNavigation} from "@react-navigation/native";

const RegisterScreen = () => {
    const auth = useAuth();

    const navigateTo = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const inputNameHandler = (text) => {
        setName(text);
    };

    const inputEmailHandler = (text) => {
        setEmail(text);
    };

    const inputPasswordHandler = (text) => {
        setPassword(text);
    };

    const inputConfirmPasswordHandler = (text) => {
        setConfirmPassword(text);
    };

    const handleSubmit = async () => {
        const response = await auth.register(name, email, password).then(r => console.log(r));

        console.log(response);
        navigateTo.navigate("Login");
    }

    return (
        <AuthLayout buttonText="SIGN UP" btnOnClick={handleSubmit}>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}>

                <Text style={styles.title}>Welcome Onboard</Text>

                <View style={styles.inputsContainer}>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={inputNameHandler}
                        placeholder='Enter your full name'/>
                    <TextInput
                        style={styles.input}
                        value={email}
                        keyboardType='email-address'
                        caretHidden={false}
                        onChangeText={inputEmailHandler}
                        placeholder='Enter your email'/>
                    <TextInput
                        style={styles.input}
                        value={password}
                        keyboardType='visible-password'
                        secureTextEntry={true}
                        onChangeText={inputPasswordHandler}
                        placeholder='Enter Password'/>
                    <TextInput
                        style={styles.input}
                        value={confirmPassword}
                        secureTextEntry={true}
                        keyboardType="visible-password"
                        onChangeText={inputConfirmPasswordHandler}
                        placeholder='Enter confirm Password'/>
                </View>

                <View style={{flexDirection: "row"}}>
                    <Text style={styles.text}>You already have an account? </Text>
                    <Pressable onPress={()=> {
                        navigateTo.navigate('Login');
                    }}>
                        <Text style={[styles.text, styles.textBtn ]}>Sign In</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </AuthLayout>
    );
};

export default RegisterScreen;