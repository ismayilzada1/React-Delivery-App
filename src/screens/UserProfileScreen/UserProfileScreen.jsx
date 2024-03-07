import React, {useEffect} from 'react';
import {View, Text, ImageBackground, Image} from "react-native";
import styles from "./styles"
import CustomButton from "../../components/customs/CustomButton/CustomButton";
import {useNavigation} from "@react-navigation/native";
import {useAuth} from "../../context/AuthContext";

const UserProfileScreen = () => {


    const {getUser, user, logout} = useAuth();

    const navigation = useNavigation();

    const handleNavigationFavourites = () => {
        navigation.navigate('FavouritesScreen', {screen: 'Profile'});
    };

    const handleNavigationHistory = () => {
        navigation.navigate('HistoryScreen', {screen: 'Profile'});
    };

    const handleLogout = async () => {
        await logout();

        navigation.navigate('Login');
    }

    useEffect(() => {
        getUser();
    }, []);

    return (

        <View style={styles.container}>

            <ImageBackground
                source={require('../../../assets/images/card_bg.png')}
                style={styles.backgroundImage}
            >


                <View style={styles.logoContainer}>
                    <Image style={styles.logoImgStyle} source={require('../../../assets/images/user-profile.png')}/>
                </View>

                <View style={styles.bottomContainer}>


                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{user?.name}</Text>
                    </View>

                    <View style={styles.titleContainer}>
                        <Text style={[styles.title, {fontSize: 28}]}>{user?.email}</Text>
                    </View>


                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>
                            Some information about user
                        </Text>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <CustomButton textShown={true} onClick={handleNavigationHistory}
                                      buttonStyles={styles.orderNowButton} text="History"
                                      iconShown={false} textStyles={styles.orderNowButtonText}/>


                        <CustomButton textShown={true} onClick={handleNavigationFavourites}
                                      buttonStyles={styles.orderNowButton} text="Favourites"
                                      iconShown={false} textStyles={styles.orderNowButtonText}/>

                        <CustomButton
                            textShown={true}
                            onClick={handleLogout}
                            buttonStyles={styles.logoutButton}
                            text="Logout"
                            iconShown={false}
                            textStyles={styles.orderNowButtonText}
                        />

                    </View>

                </View>

            </ImageBackground>

        </View>


    );
};

export default UserProfileScreen;