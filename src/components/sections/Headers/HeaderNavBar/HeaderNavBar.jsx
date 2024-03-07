import React from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import styles from './styles';
import ChevronLeftIcon from "../../../../components/icons/ChevronLeftIcon/ChevronLeftIcon";

const HeaderNavBar = ({titleShown,containerStyle, title,backroundImage,onClick}) => {
    return (
        <View style={[styles.container,containerStyle]}>
            <Image source={backroundImage} style={styles.backgroundImage} />

            <TouchableOpacity style={styles.btnStyle} onPress={onClick}>
                <ChevronLeftIcon color="#2D0C57"/>
            </TouchableOpacity>

            {titleShown &&
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                }
        </View>
    );
};

export default HeaderNavBar;