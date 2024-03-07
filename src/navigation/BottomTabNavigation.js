import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GridIcon from "../components/icons/GridIcon/GridIcon";
import ShoppingCartIconIsFocused from "../components/icons/ShoppingCartIconIsFocused/ShoppingCartIconIsFocused";
import UserIcon from "../components/icons/UserIcon/UserIcon";
import HomeStackNavigation from "./HomeStackNavigation";
import BasketScreen from "../screens/BasketScreen/BasketScreen";
import UserProfileStackNavigation from "./UserProfileStackNaviagation";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator initialRouteName={"Home"}>
            <Tab.Screen
                name="Home"
                component={HomeStackNavigation}
                options={{
                    tabBarLabel: '',
                    title: '',
                    headerShown: false,
                    tabBarIcon: () => (
                        <GridIcon boxInsideColor={"rgba(114,3,255,0.5)"}/>
                    ),
                }}
            />

            <Tab.Screen
                name="Basket"
                component={BasketScreen}
                options={{
                    tabBarLabel: '',
                    title: '',
                    headerShown: false,
                    tabBarIcon: () => (
                        <ShoppingCartIconIsFocused/>
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={UserProfileStackNavigation}
                options={{
                    tabBarLabel: '',
                    title: '',
                    headerShown: false,
                    tabBarIcon: () => (
                        <UserIcon/>
                    ),
                }}
            />


        </Tab.Navigator>
    );
};

export default BottomTabNavigation;
