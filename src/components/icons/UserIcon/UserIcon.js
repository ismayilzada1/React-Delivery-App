import * as React from "react";
import Svg, {Path} from "react-native-svg";
import {View, StyleSheet} from "react-native";
import {useIsFocused} from "@react-navigation/native";

const UserIcon = (props) => {
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
                width={width ? width : 18}
                height={height ? height : 20}
                fill={isFocused ? activeBoxInsideColor : inactiveBoxInsideColor}
                {...props}
            >
                <Path
                    stroke={isFocused ? activeBorderColor : inactiveBorderColor}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 19v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
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
        // borderRadius: 20,
        flex:1,
        justifyContent: "flex-end",

    },

})


export default UserIcon;