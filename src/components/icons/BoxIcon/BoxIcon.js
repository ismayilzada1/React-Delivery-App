import * as React from "react";
import Svg, {Path} from "react-native-svg";
import {View, StyleSheet} from "react-native";

const BoxIcon = (props) => {
    const { width, height, color, containerstyle } = props;

    return (

        <View style={[styles.iconContainer, containerstyle]}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={width || 36}
                height={height || 40}
                fill="none"
                {...props}
            >
                <Path
                    fill={color || "#2D0C57"}
                    d="m21.22 20.315-1.793 1.038V40l16.142-9.32V12.034L21.22 20.315ZM24.141 3.593 17.934 0 1.344 9.577 7.56 13.17l16.581-9.577ZM34.515 9.577 27.36 5.502l-16.58 9.577.945.49 6.208 3.585 6.174-3.56 10.407-6.017ZM9.527 21.934l-2.97-1.527V15.66L.431 12.133v18.514L16.456 39.9V21.386l-6.929-3.992v4.54Z"
                />
            </Svg>
        </View>

    )
};

const styles = StyleSheet.create({
    iconContainer: {

    },

})


export default BoxIcon;