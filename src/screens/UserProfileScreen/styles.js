import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    backgroundImage: {
        flex: 1,
    },
    logoContainer: {
        top: 100,
        alignItems: "center"
    },
    logoImgStyle: {
        width: 150,
        height: 150,
        borderRadius: 75
    },



    bottomContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#F6F5F5",
        padding: 20,
        height: '65%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    iconContainer: {
        flex:1,
        justifyContent: 'flex-end',
    },
    icon: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        width: 104,
        height: 104,
        borderRadius: 52,
        alignSelf: 'center'
    },

    titleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontWeight: '700',
        fontSize: 34,
        lineHeight: 35,
        color: "#2D0C57",
        textAlign: "center",
    },

    descriptionContainer: {
        flex: 3,
        alignItems:"center",
        justifyContent:"center"
    },
    description: {
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 25,
        textAlign: "center",
        color: "#9586A8"
    },

    buttonsContainer: {
        gap: 20
    },

    orderNowButton: {
        alignItems: "center",
        justifyContent: "center",
    },
    logoutButton:{
      backgroundColor:"red",
        alignItems: "center",
        justifyContent: "center",
    },
    dismissButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",

    },
    dismissButtonText: {
        fontSize: 15,
        fontWeight: '600',
        lineHeight: 18,
        color: "#9586A8",
        textAlign: "center",
    },

    orderNowButtonText: {
        fontSize: 15,
        fontWeight: '600',
        lineHeight: 18,
        color: "#fff",
        textAlign: "center"
    }


});

export default styles;
