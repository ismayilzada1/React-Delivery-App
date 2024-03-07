import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import BottomTabNavigation from "./BottomTabNavigation";
import ProductItemScreen from "../screens/ProductItemScreen/ProductItemScreen";
import PaymentCardScreen from "../screens/PaymentCardScreen/PaymentCardScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import BasketScreen from "../screens/BasketScreen/BasketScreen";
import ProtectedRoute from "../routing/ProtectedRoute";
import UserProfileStackNavigation from "./UserProfileStackNaviagation";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const BaseStackNavigation = () => {
    const navigation = useNavigation();

    return (
        <Stack.Navigator initialRouteName={'HomeScreen'}>
            <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
            <Stack.Screen name="Register" options={{ headerShown: false }} component={RegisterScreen} />
            <Stack.Screen
                name="WelcomeScreen"
                options={{ headerShown: false }}
                component={() => <ProtectedRoute><SplashScreen navigation={navigation}/></ProtectedRoute>}
            />
            <Stack.Screen
                name="HomeScreen"
                options={{ headerShown: false }}
                component={() => <ProtectedRoute><BottomTabNavigation navigation={navigation}/></ProtectedRoute>}
            />
            <Stack.Screen
                name="PaymentScreen"
                options={{ headerShown: false }}
                component={() => <ProtectedRoute><PaymentCardScreen navigation={navigation}/></ProtectedRoute>}
            />
            <Stack.Screen
                name="ItemDetailsScreen"
                options={{ headerShown: false }}
                component={() => <ProtectedRoute><ProductItemScreen navigation={navigation}/></ProtectedRoute>}
            />
            <Stack.Screen
                name="BasketScreen"
                options={{ headerShown: false }}
                component={() => <ProtectedRoute><BasketScreen navigation={navigation}/></ProtectedRoute>}
            />
            <Stack.Screen
                name="UserProfileScreen"
                options={{ headerShown: false }}
                component={() => <ProtectedRoute><UserProfileStackNavigation navigation={navigation}/></ProtectedRoute>}
            />
        </Stack.Navigator>
    );
};

export default BaseStackNavigation;

