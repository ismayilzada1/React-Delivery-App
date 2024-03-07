import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from "../screens/CategoriesScreen/CategoriesScreen";
import ProductsScreen from "../screens/ProductsScreen/ProductsScreen";



const Stack = createStackNavigator();
const HomeStackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={"CategoriesScreen"}>
            <Stack.Screen name="CategoriesScreen" options={{headerShown: false}} component={CategoriesScreen} />
            <Stack.Screen name="ProductsScreen" options={{headerShown: false}} component={ProductsScreen} />
        </Stack.Navigator>
    );
};

export default HomeStackNavigation;