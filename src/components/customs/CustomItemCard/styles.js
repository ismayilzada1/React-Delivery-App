import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "column",
        minWidth: 160,
        maxWidth: 180,
        maxHeight: 220,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    imageContainer: {
        maxHeight: 140,
    },
    image:{
        width: '100%',
        height: 120,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    productName: {
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 21,
        color: "#2D0C57",
    },
    quantityContainer: {
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    productNameContainer:{
        paddingHorizontal:12,
        paddingTop: 6,
    },
    quantityText: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 14,
        color: '#9586A8',
    },
});

export default styles;
