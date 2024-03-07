import * as React from "react";
import Svg, {Path} from "react-native-svg";
import {View, StyleSheet} from "react-native";

const WalkingIcon = (props) => {
    const {width, height, color} = props;

    return (

        <View style={styles.iconContainer}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={width ? width : 13}
                height={height ? height : 21}
                fill="none"
                {...props}
            >
                <Path
                    stroke={color ? color : "#14142B"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6.868 3.347a1.174 1.174 0 1 0 0-2.347 1.174 1.174 0 0 0 0 2.347ZM9.215 19.778l-.998-2.995a2.348 2.348 0 0 0-.567-.918l-3.13-3.129m0 0 1.174-5.868m-1.173 5.868L1 19.778m4.694-12.91 3.252 3.252c.178.178.384.326.61.44l2.007 1.002M5.694 6.869l-2.85 1.9c-.435.29-.76.716-.925 1.211L1 12.736"
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


export default WalkingIcon;