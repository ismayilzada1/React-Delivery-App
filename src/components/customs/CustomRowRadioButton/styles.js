import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"space-around",
        backgroundColor:"#F6F5F5",
        gap:16,
        paddingVertical:4,
        paddingHorizontal:15,
    },
    clickableRadioButton:{
        width:"90%"
    },
    permanentIconContainer:{
        flex:1,
    },
    textContainer:{
        flex:12,
    },
    selectedIconContainer:{
        flex:1,
    },
    radioButtonText:{
        fontWeight:'400',
        lineHeight:25,
        fontSize:17,
        color:"rgba(0,0,0,.6)",
        alignSelf:"flex-start"
    },
    selectedRadioButtonText:{
        fontWeight:'600',
        color:"#7203FF"
    },
});

export default styles;