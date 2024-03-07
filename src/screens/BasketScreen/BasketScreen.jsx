import React, {useEffect, useState} from 'react';
import {View, Text} from "react-native";
import styles from './styles';
import ItemsHeaderNavbarLayout from "../../components/sections/Headers/ItemsHeaderNavbarLayout/ItemsHeaderNavbarLayout";
import {useNavigation} from "@react-navigation/native";
import {useBasket} from "../../context/BasketContext";
import CustomRowItemCardForShown from "../../components/customs/CustomTemp/CustomRowItemCardForShown";
import CustomButton from "../../components/customs/CustomButton/CustomButton";
import {useAuth} from "../../context/AuthContext";


const BasketScreen = ({title= "Basket", backgroundImage,navigation}) => {

    const {
        basket,
        removeProductFromBasket,
        finishShopping
    } = useBasket();

    const {
        getUserToken
    } = useAuth();


    const handleBackClick = () => {
        navigation.navigate('Home', { screen: 'CategoriesScreen' });
    };


    const RemoveFromBasket=(productId)=> removeProductFromBasket(productId);


    const handleFinishShopping=async ()=>{
        const token = await getUserToken();
        console.log("Finish basket screen token: ",token);
        await finishShopping(token);
    }

    return (


            <ItemsHeaderNavbarLayout mainContainerStyle={styles.mainContainerStyle} searchIsShown={false} onClick={handleBackClick} title={title} backgroundImage={backgroundImage} main={
                <>
                    <View style={styles.chipsContainer}>
                        {basket ? (
                            basket.map((item,index) => (
                                <CustomRowItemCardForShown
                                    key={index}
                                    productName={item.name}
                                    productImg={item.imageUrls[0].url}
                                    productPrice={item.price}
                                    sellingType={item.sellingType}
                                    currency={item.currency}
                                    onBtnClick={()=>RemoveFromBasket(item.id)}
                                />
                            ))
                        ) : (
                            <Text>Loading category Types...</Text>
                        )}
                    </View>

                    <CustomButton
                        textShown={true}
                        text={"FINISH HIM !!!"}
                        buttonStyles={styles.buttonStyles}
                        textStyles={styles.textStyles}
                        onClick={handleFinishShopping}
                    />

                </>
            }></ItemsHeaderNavbarLayout>



    );
};

export default BasketScreen;