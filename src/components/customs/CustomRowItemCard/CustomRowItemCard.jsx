import React from "react";
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from "react-native";
import CustomButton from "../../../components/customs/CustomButton/CustomButton";
import HeartIcon from "../../icons/HeartIcon/HeartIcon";
import ShoppingCartIcon from "../../icons/ShoppingCartIcon/ShoppingCartIcon";

const CustomRowItemCard = ({
                               productImg,
                               productName,
                               productPrice,
                               currency,
                               sellingType,
                               onClick,
                               onClickAddToBasket,
                               onClickAddToFavourites
                           }) => {


    return (
        <TouchableOpacity onPress={onClick}>
            <View style={styles.cardContainer}>
                <View style={styles.leftSubContainer}>
                    {/* fixed */}
                    <Image source={productImg} style={styles.image}/>
                    {/*{uri:productImg}*/}
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
                        <CustomButton
                            iconShown={true}
                            icon={<HeartIcon color="#9586A8"/>}
                            iconColor="red"
                            buttonStyles={styles.heartBtnStyle}
                            onClick={onClickAddToFavourites}
                        />
                        <CustomButton
                            iconShown={true}
                            icon={<ShoppingCartIcon color="#fff"/>}
                            iconColor="red"
                            buttonStyles={styles.shoppingCartBtnStyle}
                            onClick={onClickAddToBasket}
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CustomRowItemCard;

const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        height: height * 0.2,
        width: width,
        paddingVertical: 10,
        paddingHorizontal: 20,
        gap: 5,
    },
    leftSubContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: width * 0.4,
    },
    image: {
        borderRadius: 8,
        width:width*0.4,
        height:height*0.18
    },
    rightSubContainer: {
        flex: 1,
    },
    header: {
        flex: 1,
        paddingHorizontal: 20,
    },
    productName: {
        fontSize: 18,
        fontWeight: "600",
    },
    body: {
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 20,
        gap: 5,
        alignItems: "flex-start",
    },
    price: {
        fontSize: 22,
        fontWeight: "700",
    },
    currencyAndSellingType: {
        fontSize: 16,
        fontWeight: "400",
        color: "rgba(0,0,0,0.5)",
    },
    footer: {
        flex: 1,
        flexDirection: "row",
        gap: 10,
        paddingHorizontal: 20,
    },
    heartBtnStyle: {
        paddingHorizontal: 25,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#D9D0E3",
    },
    shoppingCartBtnStyle: {
        paddingHorizontal: 25,
    },
});
