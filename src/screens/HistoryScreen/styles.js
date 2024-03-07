import {Dimensions, StyleSheet} from "react-native";

const {width,height} = Dimensions.get("window");

const styles = StyleSheet.create({
    chipsContainer:{
        width:width,
        height:height*0.12,
        flex:1,
        flexDirection:"row",
        gap:4,
        marginHorizontal:20,
        marginVertical:8,
        flexWrap:"wrap",
    },
    rowContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    dateTouchable: {
        width: '80%',
        marginVertical: 5,
    },
    dateText: {
        fontSize: height*0.018,
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ccc',
        textAlign: 'center',
    },
});

export default styles;
