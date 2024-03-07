import React from 'react';
import styles from "./styles"
import {View, Text, TouchableOpacity} from 'react-native';
import CheckIcon from "../../icons/CheckIcon/CheckIcon";

const CustomChip = ({ value, selected,setSelected,quantity,chipStyle }) => {
    const handleSelect=()=>{
        setSelected(!selected);
    }
    return (

        <TouchableOpacity onPress={handleSelect}>

            <View style={[styles.chipContainer,chipStyle, selected && styles.selectedChip]}>
                {selected ? (
                    <CheckIcon color="#6C0EE4"/>
                ) : null}

                <Text style={[styles.chipText, selected && styles.selectedChipText]}>{value} ({quantity})</Text>
            </View>

        </TouchableOpacity>

    );
};


export default CustomChip;