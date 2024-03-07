import React, {useEffect} from 'react';
import {View, Text} from "react-native";
import styles from './styles';
import CustomButton from "../../components/customs/CustomButton/CustomButton";
import Carousel from "../../components/Carousel/Carousel"
import HeartIcon from "../../components/icons/HeartIcon/HeartIcon";
import {useNavigation} from "@react-navigation/native";
import HeaderNavBar from "../../components/sections/Headers/HeaderNavBar/HeaderNavBar";
import ShoppingCartIcon from "../../components/icons/ShoppingCartIcon/ShoppingCartIcon";
import {useCommon} from "../../context/CommonContext";
import {useBasket} from "../../context/BasketContext";
import {useFavourites} from "../../context/FavouriteContext";

const ProductItemScreen = ({navigation}) => {

    const {
        selectedProductId,
        getProductDetailsById,
        currentProduct
    } = useCommon();

    const{addProductToBasket}=useBasket();

    const{addProductToFavourites}=useFavourites();



    useEffect( () => {
        const GetProductDetailsById = async () => {
            console.log('Product Details => ')

            const response = await getProductDetailsById(selectedProductId);
        }

        GetProductDetailsById();
    }, []);

    const images = currentProduct?.imageUrls?.map(image => image.url) || [];


    const handleBackClick = () => {
        navigation.navigate('Home', {screen: 'ProductsScreen'});
    };


    const handleAddProductToBasket=(product)=>{
        addProductToBasket(product)
    }

    const handleAddProductToFavourites=(product)=>{
        addProductToFavourites(product)
    }


    return (
            <View style={styles.container}>

                <HeaderNavBar onClick={handleBackClick} containerStyle={styles.headerContainerStyle}/>

                <Carousel images={images}/>


                <View style={styles.bottomContainer}>


                    <View style={styles.productNameContainer}>
                        <Text style={styles.productName}>{currentProduct?.name}</Text>
                    </View>


                    <View style={styles.bodyContainer}>

                        <View style={styles.body}>
                            <Text style={styles.price}>
                                {currentProduct?.price}
                            </Text>
                            <Text style={styles.currencyAndSellingType}>
                                {currentProduct?.currency} / {currentProduct?.sellingType}
                            </Text>

                        </View>
                        <View style={styles.secondBody}>
                            <Text style={styles.weightAndSellingType}>
                                ~{currentProduct?.weight} / piece
                            </Text>
                        </View>
                    </View>

                    <View style={styles.descriptionContainer}>
                        <Text style={styles.title}>{currentProduct?.manufactureCountry}</Text>
                        <Text style={styles.description}>{currentProduct?.description}</Text>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <CustomButton
                            textShown={false}
                            buttonStyles={styles.heartButtonStyles}
                            iconShown={true}
                            icon={<HeartIcon color={styles.heartIcon.color}/>}
                            onClick={()=>handleAddProductToFavourites(currentProduct)}
                        />

                        <CustomButton
                            textShown={true}
                            text="Add to cart"
                            iconShown={true}
                            textStyles={styles.addToCartButtonText}
                            buttonStyles={styles.addToCartButton}
                            icon={<ShoppingCartIcon color={styles.shoppingCardIcon.color}/>}
                            onClick={()=>handleAddProductToBasket(currentProduct)}
                        />
                    </View>


                </View>

            </View>
    );
};

export default ProductItemScreen;
