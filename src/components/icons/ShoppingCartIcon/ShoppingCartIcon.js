import * as React from "react";
import Svg, {Path} from "react-native-svg";
import {View, StyleSheet} from "react-native";

const ShoppingCartIcon = (props) => {
    const {width, height, color} = props;

    return (

        <View style={styles.iconContainer}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={width ? width : 24}
                height={height ? height : 18}
                fill="none"
                {...props}
            >
                <Path
                    stroke={color ? color : "#14142B"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5.143 1h17.143L20.57 11.286H6.857L5.143 1ZM8.571 17a1.143 1.143 0 1 0 0-2.286 1.143 1.143 0 0 0 0 2.286ZM18.857 17a1.143 1.143 0 1 0 0-2.286 1.143 1.143 0 0 0 0 2.286ZM5.143 1H1.714"
                />
            </Svg>
        </View>

    )};

const styles = StyleSheet.create({
    iconContainer: {
        // backgroundColor: '#a7cde1',
        // width: 40,
        // height: 40,
        // alignItems:"center",
        // justifyContent: "center",
        // borderRadius: 20,
    },

})


export default ShoppingCartIcon;

