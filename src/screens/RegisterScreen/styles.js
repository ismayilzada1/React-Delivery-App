import {StyleSheet} from "react-native";
import {Dimensions} from 'react-native';


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        color: "#FFFFFF"
    },
    inputsContainer: {
        flexDirection: 'column',
        gap:10,
        marginVertical: 10,
        paddingVertical: 10,
    },
    input: {
        width: (width * 0.9),
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#f4f4f4",
        borderRadius: 8,
        fontSize: 16,
        fontWeight: '600'
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        color: "#FFFFFF"
    },
    textBtn: {
        fontWeight: "800",
        color: "#0BCE83"
    }

});

export default styles;