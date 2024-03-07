import {StyleSheet} from "react-native";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%",
        height:"100%"
    },
    headerContainer:{
      flex:2,
        width:"100%",
    },
    headerText:{
        fontWeight:'700',
        fontSize:30,
        lineHeight:41,
        color:"#2D0C57",
        marginLeft:20
    },

    cardContainer:{
        flex:4,
        width:"100%",
        alignItems:"center",
        justifyContent:"flex-start"
    },
    inputsContainer:{
        flex:3,
        width:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
    buttonContainer:{
        flex:1,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
    },

    useThisCardButton:{
        color:"#fff",
        fontWeight:'600',
        fontSize:15,
        lineHeight:18,
        textAlign:"center",
        width:"90%",
    },


    cardBackground:{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        width:"100%",
    },
    cardBackgroundImageStyle:{
        borderRadius:20
    },

    card:{
        width:windowWidth * 0.9,
        aspectRatio: 1.586,
        borderRadius: 20,
        marginBottom: 20,
    },

    cardIconContainer:{
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center",
        width: windowWidth * .85,
    },
    cardNumberContainer:{
        flex:1,
        width:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
    cardNumber:{
      fontWeight:'500',
        color:'#fff',
        fontSize: windowWidth * 0.074,
        lineHeight: windowWidth * 0.09,
    },
    cardNameAndDateContainer:{
        flex:1,
        width:"100%",
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-around"
    },
    cameraIcon:{
        width:42,
        height:36
    },
    masterCardIcon: {
        aspectRatio: 1.1,
        resizeMode: "contain",
        width: "30%",
    },


    cardOwnerNameAndDate:{
        fontWeight:'500',
        color:"#fff",
        fontSize: windowWidth * 0.055,
        lineHeight: windowWidth * 0.075,
    },


    rowInputs:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"space-between",
        width:"90%",
    },

    rowInputContainer:{
        width: Dimensions.get('screen').width * 0.42,
    }


});

export default styles;
