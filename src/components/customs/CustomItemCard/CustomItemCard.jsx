import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from "./styles";

const CustomItemCard = ({imageSource, productName, quantity,onClick}) => {
    return (
        <TouchableOpacity onPress={onClick}>
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image source={{uri: imageSource}} style={styles.image} resizeMode="cover"/>
            </View>
            <View style={styles.productNameContainer}>
                <Text style={styles.productName}>{productName}</Text>
            </View>
            <View style={styles.quantityContainer}>
                <Text style={styles.quantityText}>({quantity})</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
};

export default CustomItemCard;
