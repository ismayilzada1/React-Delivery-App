import React, {useState} from 'react';
import styles from './styles';
import {
    Pressable,
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    Platform,
} from "react-native";

import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import {useAuth} from "../../context/AuthContext";
import {useNavigation} from "@react-navigation/native";

const LoginScreen = ({navigation}) => {
    const auth = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const inputEmailHandler = (text) => {
        setEmail(text);
    };

    const inputPasswordHandler = (text) => {
        setPassword(text);
    };

    const handleSubmit = async () => {
        console.log('Login')
        const response = await auth.login(email, password);

        console.log(response)
        navigation.navigate('WelcomeScreen');
    }

    return (
        <AuthLayout buttonText={"SIGN IN"} btnOnClick={handleSubmit}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}>
                <Text style={styles.title}>Welcome back!</Text>

                <View style={styles.inputsContainer}>
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
                        placeholder='Enter your password'/>
                </View>

                <View style={{flexDirection: "row"}}>
                    <Text style={styles.text}>Forgot password?</Text>
                    <Pressable>
                        <Text style={[styles.text, styles.textBtn]}>Click</Text>
                    </Pressable>
                </View>

                <View style={{flexDirection: "row"}}>
                    <Text style={styles.text}>Don't have an account? </Text>
                    <Pressable onPress={() => {
                        navigation.navigate('Register')
                    }}>
                        <Text style={[styles.text, styles.textBtn]}>Sign Up</Text>
                    </Pressable>
                </View>

            </KeyboardAvoidingView>
        </AuthLayout>
    );
};

export default LoginScreen;