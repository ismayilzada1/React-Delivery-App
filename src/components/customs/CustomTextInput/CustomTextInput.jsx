import React from 'react';
import { View, TextInput, Text,Image } from 'react-native';
import styles from "./styles";

const CustomTextInput = ({ label,containerStyle, value, onChangeText, placeholder,icon }) => {
    return (
        <View style={[styles.container,containerStyle]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
            {icon && <View style={styles.iconContainer}>{icon}</View>}
        </View>
    );
};

export default CustomTextInput;
