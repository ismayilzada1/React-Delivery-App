import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    chipContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: "#fff",
        gap: 8,
        borderRadius: 17,
        paddingVertical: 4,
        paddingHorizontal: 15
    },
    chipText: {
        fontWeight: '400',
        lineHeight: 22,
        fontSize: 14,
        color: "#9586A8",
        alignSelf: "center"
    },
    selectedChipText: {
        fontWeight: '500',
        color: "#6C0EE4"
    },
    selectedChip: {
        backgroundColor: '#D6B6FF',
    },
});

export default styles;