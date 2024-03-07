import React, {useEffect} from 'react';
import {View, Text} from "react-native";
import styles from './styles';
import ItemsHeaderNavbarLayout from "../../components/sections/Headers/ItemsHeaderNavbarLayout/ItemsHeaderNavbarLayout";
import {useNavigation} from "@react-navigation/native";
import CustomRowItemCardForShown from "../../components/customs/CustomTemp/CustomRowItemCardForShown";

const HistoryProductsScreen = ({route}) => {

    const { orderDate,products } = route.params;

    const navigation = useNavigation();

    const handleBackClick = () => {
        console.log(orderDate)
        navigation.navigate('HistoryScreen', { screen: 'Profile' });
    };

    useEffect(() => {
        console.log(products);
    }, []);



    return (

            <ItemsHeaderNavbarLayout searchIsShown={false} onClick={handleBackClick} title={`Date:  ${orderDate}`} main={
                <>
                    <View style={styles.chipsContainer}>
                        {products ? (
                            products?.map((item,index) => (
                                <CustomRowItemCardForShown
                                    key={index}
                                    productName={item.name}
                                    productImg={item.imageUrls[0].url}
                                    productPrice={item.price}
                                    sellingType={item.sellingType}
                                    currency={item.currency}
                                />
                            ))
                        ) : (
                            <Text>Loading products...</Text>
                        )}
                    </View>

                </>
            }></ItemsHeaderNavbarLayout>



    );
};

export default HistoryProductsScreen;