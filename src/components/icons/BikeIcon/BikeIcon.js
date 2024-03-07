import * as React from "react";
import Svg, {Path} from "react-native-svg";
import {View, StyleSheet} from "react-native";

const BikeIcon = (props) => {
    const { width, height, color, containerStyle } = props;

    return (

        <View style={[styles.iconContainer, containerStyle]}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={width ? width : 22}
                height={height ? height : 19}
                fill="none"
                {...props}
            >
                <Path
                    stroke={color ? color : "#14142B"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13.267 3.267a1.133 1.133 0 1 0 0-2.267 1.133 1.133 0 0 0 0 2.267ZM11 15.733V11.2L7.6 8.933l3.4-3.4L13.267 7.8l2.266 1.133M4.2 18a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8ZM17.8 18a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8Z"
                />
            </Svg>
        </View>

    )
};

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


export default BikeIcon;