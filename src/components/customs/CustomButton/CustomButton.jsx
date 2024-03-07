import React from 'react';
import styles from './styles';
import {Pressable, Text} from "react-native";

const CustomButton = (props) => {

    const {
        iconShown,
        icon,
        textShown,
        text,
        textStyles,
        buttonStyles,
        onClick
    } = props;

    return (
        <Pressable style={[styles.container, buttonStyles]} onPress={onClick}>
            {iconShown && icon}
            {textShown &&
                <Text style={[styles.text, textStyles]}>{text}</Text>}
        </Pressable>
    );
};


export default CustomButton;