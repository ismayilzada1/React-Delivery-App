import React from 'react';
import {ScrollView, Text, View, Image} from "react-native";
import styles from "./styles";
import HeaderNavBar from "../HeaderNavBar/HeaderNavBar";
import CustomSearchBar from "../../../../components/customs/CustomSearchBar/CustomSearchBar";

const ItemsHeaderNavbarLayout = ({main,mainContainerStyle,title,backgroundImage,onClick,searchIsShown,onSearchBarValueChange}) => {
    return (
        <View style={styles.container}>

            <HeaderNavBar onClick={onClick} titleShown={true} backroundImage={backgroundImage}/>

            <ScrollView>
                <View style={styles.main}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>{title}</Text>
                    </View>

                    {searchIsShown &&
                        <View style={styles.searchContainer}>
                            <CustomSearchBar onChangeText={onSearchBarValueChange}/>
                        </View>
                    }

                    <View style={[styles.mainContainer,mainContainerStyle]}>
                        {main}
                    </View>

                </View>

            </ScrollView>
        </View>
    );
};

export default ItemsHeaderNavbarLayout;