import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 96,
        backgroundColor: "#fefefe",
        position: "relative",

    },
    btnStyle: {
        position: "absolute",
        top: 62,
        left: 21,
        zIndex:99999
    },
    titleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingVertical: 16
    },
    title: {
        fontSize: 17,
        fontWeight: "600",
        lineHeight: 22,
        color: "#2D0C57"
    },
    backgroundImage:{
        position:"absolute",
        top:0,
        right:0,
        width:180,
        height:180,
        zIndex:0
    },
    backBtnStyle: {
        position: "absolute",
        top: 262,
        left: 21,
    },
});

export default styles;
