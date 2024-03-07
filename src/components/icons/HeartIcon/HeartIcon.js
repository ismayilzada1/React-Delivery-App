import * as React from "react";
import Svg, {Path} from "react-native-svg";
import {View, StyleSheet} from "react-native";

const HeartIcon = (props) => {
    const {width, height, color,boxInsideColor} = props;

    return (

        <View style={styles.iconContainer}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={width ? width : 24}
                height={height ? height : 20}
                fill={boxInsideColor ? boxInsideColor : 'none'}
                {...props}
            >
                <Path
                    stroke={color ? color : "#14142B"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20.84 2.61a5.5 5.5 0 0 0-7.78 0L12 3.67l-1.06-1.06a5.501 5.501 0 0 0-7.78 7.78l1.06 1.06L12 19.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78v0Z"
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


export default HeartIcon;