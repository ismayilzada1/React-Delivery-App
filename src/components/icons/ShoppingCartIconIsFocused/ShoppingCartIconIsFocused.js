import * as React from "react";
import Svg, {Path} from "react-native-svg";
import {View, StyleSheet} from "react-native";
import {useIsFocused} from "@react-navigation/native";

const ShoppingCartIconIsFocused = (props) => {
    const {width, height} = props;

    const isFocused = useIsFocused();


    const activeBorderColor = '#7203FF';
    const inactiveBorderColor = '#9586A8';

    const activeBoxInsideColor='rgba(114,3,255,0.5)';
    const inactiveBoxInsideColor='#F6F5F5';

    return (

        <View style={styles.iconContainer}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={width ? width : 24}
                height={height ? height : 18}
                fill={isFocused ? activeBoxInsideColor : inactiveBoxInsideColor}
                {...props}
            >
                <Path
                    stroke={isFocused ? activeBorderColor : inactiveBorderColor}
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
        justifyContent: "flex-end",
        flex:1
        // borderRadius: 20,
    },

})


export default ShoppingCartIconIsFocused;