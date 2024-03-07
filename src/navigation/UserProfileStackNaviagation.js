import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HistoryScreen from "../screens/HistoryScreen/HistoryScreen";
import FavouritesScreen from "../screens/FavouritesScreen/FavouritesScreen";
import UserProfileScreen from "../screens/UserProfileScreen/UserProfileScreen";
import HistoryProductsScreen from "../screens/HistoryProductsScreen/HistoryProductsScreen";



const Stack = createStackNavigator();
const UserProfileStackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={"UserProfile"}>
            <Stack.Screen name="UserProfile" options={{headerShown: false}} component={UserProfileScreen} />
            <Stack.Screen name="FavouritesScreen" options={{headerShown: false}} component={FavouritesScreen} />
            <Stack.Screen name="HistoryScreen" options={{headerShown: false}} component={HistoryScreen} />
            <Stack.Screen name="HistoryProducts" options={{headerShown: false}} component={HistoryProductsScreen} />
        </Stack.Navigator>
    );
};

export default UserProfileStackNavigation;