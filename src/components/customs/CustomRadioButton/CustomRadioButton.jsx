import React from 'react';
import { TouchableOpacity, Animated, Easing, Dimensions } from 'react-native';
import styles from './styles';

const { width } = Dimensions.get('window');

const CustomRadioButton = ({ isChecked, onRadioButtonChange }) => {
    const circlePosition = new Animated.Value(isChecked ? -width * 0.08 : 0);
    const textPosition = new Animated.Value(isChecked ? width * 0.06 : 0);

    const toggleSwitch = () => {
        const newCirclePosition = isChecked ? 0 : width * 0.05;
        const newTextPosition = isChecked ? 0 : width * 0.05;
        onRadioButtonChange(!isChecked);
        Animated.parallel([
            Animated.timing(circlePosition, {
                toValue: newCirclePosition,
                duration: 300,
                easing: Easing.ease,
                useNativeDriver: true,
            }),
            Animated.timing(textPosition, {
                toValue: newTextPosition,
                duration: 300,
                easing: Easing.ease,
                useNativeDriver: true,
            }),
        ]).start();
    };

    return (
        <TouchableOpacity
            style={styles.radioButton}
            onPress={toggleSwitch}>
            <Animated.Text style={[{ transform: [{ translateX: textPosition }] }, styles.radioButtonText]}>
                {isChecked ? 'YES' : 'NO'}
            </Animated.Text>
            <Animated.View style={[styles.radioButtonCircle, { transform: [{ translateX: circlePosition }] }]} />
        </TouchableOpacity>
    );
};

export default CustomRadioButton;
