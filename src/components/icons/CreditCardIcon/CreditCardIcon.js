import * as React from "react";
import Svg, {Path} from "react-native-svg";
import {View, StyleSheet} from "react-native";

const CreditCardIcon = (props) => {
    const {width, height, color} = props;

    return (

        <View style={styles.iconContainer}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={width ? width : 24}
                height={height ? height : 24}
                fill="none"
                {...props}
            >
                <Path
                    stroke={color ? color : "#14142B"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 1H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM1 7h22"
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


export default CreditCardIcon;