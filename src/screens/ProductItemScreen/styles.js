import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        position:"relative"
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
    productNameContainer:{
        flex:1,
    },
    productName:{
        fontSize:30,
        fontWeight:'700',
        lineHeight:41,
        color:'#2D0C57'
    },
    bodyContainer:{
        flex: 2,
        paddingHorizontal: 10,
        gap: 5,
        alignItems: 'flex-start',
    },
    body: {
        flex: 1,
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        justifyContent:"flex-start",
        marginTop:10,
    },
    secondBody:{
        gap: 5,
        marginBottom:16,
    },
    price: {
        fontSize: 22,
        fontWeight: "700"
    },
    currencyAndSellingType: {
        fontSize: 16,
        fontWeight: "400",
        color: 'rgba(0,0,0,0.5)',
    },
    descriptionContainer:{
        flex:6,
    },
    buttonsContainer:{
        flexDirection:"row",
        flex:2,
        gap:20
    },
    title:{
        fontSize:22,
        fontWeight:'700',
        lineHeight:22,
        color:"#2D0C57"
    },
    description:{
        fontWeight:'400',
        fontSize:17,
        lineHeight:25,
        color:"#9586A8",
        marginTop:'6%'
    },
    weightAndSellingType:{
    color:"#06BE77",
        fontWeight:'500',
        fontSize:17,
        lineHeight:25
    },
    heartButtonStyles:{
        backgroundColor:"#fff",
        borderWidth:1,
        borderColor:'#D9D0E3',
        borderRadius:14,
        paddingHorizontal: 30,
        paddingVertical: 10,
        flex:1
    },
    addToCartButton:{
        borderRadius:14,
        paddingHorizontal: 30,
        paddingVertical: 10,
        flex:10,
        justifyContent:"center"
    },
    addToCartButtonText:{
        color:"#fff",
    },
    heartIcon: {
        color: "#9586A8",
    },
    shoppingCardIcon: {
        color: "#ffffff"
    },
    headerContainerStyle:{
        position:"absolute",
        height:60,
        zIndex:9999,
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }



});

export default styles;
