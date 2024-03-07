import * as React from "react";
import Svg, {Path} from "react-native-svg";
import {View, StyleSheet} from "react-native";
import { useIsFocused } from '@react-navigation/native';

const GridIcon = (props) => {
    const { width, height, containerStyle } = props;

    const isFocused = useIsFocused();


    const activeBorderColor = '#7203FF';
    const inactiveBorderColor = '#9586A8';

    const activeBoxInsideColor='rgba(114,3,255,0.5)';
    const inactiveBoxInsideColor='#F6F5F5';


    return (

        <View style={[styles.iconContainer, containerStyle]}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={width ? width : 20}
                height={height ? height : 20}
                fill={isFocused ? activeBoxInsideColor : inactiveBoxInsideColor}
                {...props}
            >
                <Path
                    stroke={isFocused ? activeBorderColor : inactiveBorderColor}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 1H1v7h7V1ZM19 1h-7v7h7V1ZM19 12h-7v7h7v-7ZM8 12H1v7h7v-7Z"
                />
            </Svg>
        </View>

    )};

const styles = StyleSheet.create({
    iconContainer: {
        justifyContent: "flex-end",
        flex:1,
    },

})


export default GridIcon;