import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0,
        borderRadius: width * 0.05,
        padding: width * 0.01,
        backgroundColor: "#E2CBFF"
    },
    radioButtonCircle: {
        width: width * 0.055,
        height: width * 0.055,
        borderRadius: width * 0.28,
        backgroundColor: '#fff',
        borderWidth: width * 0.005,
        borderColor: '#ccc',
        marginLeft: width * 0.014,
    },
    radioButtonCircleChecked: {
        backgroundColor: '#fff',
        marginLeft: 'auto',
    },
    radioButtonText: {
        color: "#6C0EE4",
        fontSize: width * 0.038,
        lineHeight: width * 0.05,
        fontWeight: '600'
    }
});

export default styles;
