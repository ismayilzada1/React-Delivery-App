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
    }
});

export default styles;
