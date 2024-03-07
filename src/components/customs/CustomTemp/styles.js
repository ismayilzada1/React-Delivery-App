import {StyleSheet, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');


const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        height: height*0.2,
        width:width,
        paddingVertical: 10,
        paddingHorizontal: 20,
        gap: 5,
    },
    leftSubContainer: {
        flex:1,
        alignItems:"center",
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

export default styles;