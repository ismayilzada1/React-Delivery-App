import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "space-between"
    },
    logoContainer: {
        // position: 'absolute',
        top: 100,
        // left: 5,
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
        // alignItems: 'center'
    },

    iconContainer: {
        flex:1,
        justifyContent: 'flex-end',
        // borderWidth: 1
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
        // borderWidth: 1
    },
    title: {
        fontWeight: '700',
        fontSize: 34,
        lineHeight: 41,
        color: "#2D0C57",
        textAlign: "center",
        paddingHorizontal: 20
    },

    descriptionContainer: {
        flex: 1,
        // borderWidth: 1,
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
        // borderWidth: 1
    },
    dismissButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        // borderWidth: 1

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
    },
    btnContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    buttonStyles: {
        justifyContent: "center",
    },
    textStyles: {
        fontSize: 16,
        color: "#ffffff"
    }


});

export default styles;
