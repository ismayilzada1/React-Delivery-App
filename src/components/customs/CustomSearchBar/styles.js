import {Dimensions, StyleSheet} from "react-native";

const screenWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        maxWidth: screenWidth - 40,
        paddingVertical: 10,
        paddingHorizontal:20,
        gap: 10,
        borderRadius: 27,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:"center",
    },
    iconContainer: {},
    input: {
        flex: 1,
        fontSize: 19,
        fontWeight: '400',
        lineHeight: 22,
        color: '#000',
        borderWidth: 0,
        paddingLeft: 5
    },

});

export default styles;