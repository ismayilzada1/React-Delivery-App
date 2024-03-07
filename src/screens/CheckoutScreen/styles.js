import {Dimensions, StyleSheet,PixelRatio } from "react-native";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const scaleFontSize = (size) => {
    const scale = Math.min(screenWidth / 375, screenHeight / 667);
    const newSize = size * scale;
    return Math.round(newSize);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F5F5',
        justifyContent: 'center',
        alignItems:"center",
        width:"100%",
    },
    main:{
        flex:1,
        width:"100%",
        height:"100%",
        backgroundColor:"#F6F5F5",
        paddingTop:15,
        gap:15
    },
    row:{
        flex:1,
        flexDirection:"column",
        maxHeight:screenHeight*0.15,
    },
    deliveryOptionsRow:{
        maxHeight:screenHeight*0.3,
    },
    rowHeader:{
        flex:1,
        alignItems:"center",
        justifyContent:"space-around",
        flexDirection:"row",
        maxHeight:screenHeight*0.15*0.3
    },
    Title:{
        color:"#2D0C57",
        fontWeight:'700',
        fontSize:scaleFontSize(20),
        lineHeight:scaleFontSize(20),
        textAlign:"center"
    },
    changeButton:{
        color:"#7203FF",
        fontWeight:'600',
        fontSize:scaleFontSize(14),
        lineHeight:18,
        textAlign:"center"
    },
    rowMain:{
        flex:1,
        marginLeft:screenWidth*0.1
    },
    rowDeliveryAdress:{
        maxHeight:screenHeight*0.21
    },
    cardContainer:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        gap:25,
    },

    deliveryOptionsContainer:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        gap:30,
    },


    cardNumber:{
        fontWeight:'400',
        fontSize:scaleFontSize(17),
        lineHeight:25,
        color:"#9586A8",
    },
    textsContainer:{
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
    },
    adressText:{
        width:"100%"
    }



});

export default styles;
