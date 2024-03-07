import {Dimensions, StyleSheet} from "react-native";

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%",
        height:"100%"
    },
    main:{
        flex:1,
        width:"100%",
        height:"100%"
    },
    headerContainer:{
        flex:1,
        alignItems:"flex-start",
        marginLeft:"5%",
        maxHeight: 40
    },
    searchContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        maxHeight:60,
        marginTop:15
    },
    headerText:{
        fontWeight:'700',
        fontSize:34,
        lineHeight:41,
        color:"#2D0C57"
    },

    itemContainer:{
        flex:9,
        marginTop:'2%',
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        flexWrap:"wrap",
        gap:25
    }

});

export default styles;
