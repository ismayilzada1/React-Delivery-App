import React, {useEffect} from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import styles from './styles';
import {useBasket} from "../../../context/BasketContext";
import XIcon from "../../icons/XIcon/XIcon";
import CustomButton from "../../../components/customs/CustomButton/CustomButton";

const CustomRowItemCardForShown = ({productImg, productName, productPrice, currency, sellingType, onClick, onBtnClick}) => {

    return (
        <TouchableOpacity onPress={onClick}>
            <View style={styles.cardContainer}>
                <View style={styles.leftSubContainer}>
                    <Image source={{uri:productImg}} style={styles.image}/>
                </View>

                <View style={styles.rightSubContainer}>
                    <View style={styles.header}>
                        <Text style={styles.productName}>{productName}</Text>
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.price}>{productPrice}</Text>
                        <Text style={styles.currencyAndSellingType}>
                            {currency} / {sellingType}
                        </Text>
                    </View>
                    <View style={styles.footer}>
                        {onBtnClick && (
                            <CustomButton
                                iconShown={true}
                                icon={<XIcon color="#fff"/>}
                                iconColor="red"
                                buttonStyles={styles.shoppingCartBtnStyle}
                                onClick={onBtnClick}
                            />
                        )}
                    </View>

                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CustomRowItemCardForShown;
