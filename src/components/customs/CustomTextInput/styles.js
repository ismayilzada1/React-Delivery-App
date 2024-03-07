import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: Dimensions.get('screen').width * 0.90,
        height: 70,
        gap: 5
    },
    label: {
        flex: 1,
        fontSize: 14,
        fontWeight: '400',
        lineHeight:22,
        paddingHorizontal: 14,
        color:"#9586A8",
    },
    input: {
        flex: 1,
        fontSize: 17,
        fontWeight: '400',
        lineHeight:22,
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 10,
        backgroundColor:"#fff",
    },
    iconContainer: {
        position: 'absolute',
        right: 0,
        top:25,
        bottom: 0,
        paddingRight: Dimensions.get('screen').width * 0.04,
        flex:1,
        justifyContent:"center"
    },

});

export default styles;
