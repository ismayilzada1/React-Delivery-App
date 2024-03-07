import React, {useEffect, useState} from 'react';
import {View, Text} from "react-native";
import styles from './styles';
import ItemsHeaderNavbarLayout from "../../components/sections/Headers/ItemsHeaderNavbarLayout/ItemsHeaderNavbarLayout";
import CustomRowItemCard from "../../components/customs/CustomRowItemCard/CustomRowItemCard";
import CustomChip from "../../components/customs/CustomChip/CustomChip"
import {useNavigation} from "@react-navigation/native";
import {useCommon} from "../../context/CommonContext";
import {useBasket} from "../../context/BasketContext";
import {useFavourites} from "../../context/FavouriteContext";

const ProductsScreen = ({title, backgroundImage}) => {

    const {
        selectedCategory,
        setSelectedProductId,
        products,
        getAllProductsByCategoryId,
        currentCategoryTypes,
        getAllTypesByCategoryId
    } = useCommon();

    const screenTitle = selectedCategory.name;

    if (!title) {
        console.log(selectedCategory)
        title = screenTitle;
    }


    const{addProductToBasket}=useBasket();

    const{addProductToFavourites}=useFavourites();

    const [searchQuery, setSearchQuery] = useState('');


    const [selectedCategoryTypes, setSelectedCategoryTypes] = useState([]);

    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleCategoryTypeSelection = (categoryId) => {
        if (selectedCategoryTypes.includes(categoryId)) {
            setSelectedCategoryTypes(selectedCategoryTypes.filter(id => id !== categoryId));
        } else {
            setSelectedCategoryTypes([...selectedCategoryTypes, categoryId]);
        }
    };



    const navigation = useNavigation();

    const handleCardClick = (id) => {
        setSelectedProductId(id);
        navigation.navigate('ItemDetailsScreen');
    };

    const handleBackClick = () => {
        navigation.navigate('Home', { screen: 'CategoriesScreen' });
    };


    useEffect(() => {
        const GetAllProducts=async ()=>{
            const response = await getAllProductsByCategoryId(selectedCategory.id);
        }

        const GetAllTypes=async ()=>{
            const responseTypes = await getAllTypesByCategoryId(selectedCategory.id);
        }

        GetAllTypes();
        GetAllProducts();
    }, [selectedCategory]);




    useEffect(() => {
        const filterProducts = () => {
            setFilteredProducts([]);
            if (products) {
                let filtered = [...products];
                if (selectedCategoryTypes && selectedCategoryTypes.length > 0) {
                    filtered = filtered.filter(product => selectedCategoryTypes.includes(product.productType.id));
                }
                if (searchQuery !== '') {
                    filtered = filtered.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
                }
                setFilteredProducts(filtered);
                console.log(filtered);
            }
        };

        filterProducts();
    }, [selectedCategoryTypes, searchQuery, products]);

    const handleAddProductToBasket=(product)=>{
        console.log("product: ",JSON.stringify(product));
        addProductToBasket(product)
    }

    const handleAddProductToFavourites=(product)=>{
        addProductToFavourites(product)
    }

    const handleSearchBarChange = (query) => {
        console.log("query: ",query);
        setSearchQuery(query);
    }



    return (


            <ItemsHeaderNavbarLayout onSearchBarValueChange={handleSearchBarChange} searchIsShown={true} onClick={handleBackClick} title={title} backgroundImage={backgroundImage} main={
                <>
                    <View style={styles.chipsContainer}>
                        {currentCategoryTypes ? (
                            currentCategoryTypes.map((item) => (
                                <CustomChip
                                    key={item.id}
                                    value={item.name}
                                    selected={selectedCategoryTypes.includes(item.id)}
                                    setSelected={() => handleCategoryTypeSelection(item.id)}
                                    quantity={item.productsQuantity}
                                />
                            ))
                        ) : (
                            <Text>Loading category Types...</Text>
                        )}
                    </View>



                    {filteredProducts.length > 0 ? (
                        filteredProducts?.map((item) => (
                            <CustomRowItemCard
                                key={item.id}
                                productName={item.name}
                                productImg={item.imageUrls[0].url}
                                productPrice={item.price}
                                currency={item.currency}
                                sellingType={item.sellingType}
                                onClick={() => handleCardClick(item.id)}
                                onClickAddToBasket={()=>handleAddProductToBasket(item)}
                                onClickAddToFavourites={()=>handleAddProductToFavourites(item)}
                            />
                        ))
                    ) : (
                        products ? (
                            products?.map((item) => (
                                <CustomRowItemCard
                                    key={item.id}
                                    productName={item.name}
                                    productImg={item.imageUrls[0].url}
                                    productPrice={item.price}
                                    currency={item.currency}
                                    sellingType={item.sellingType}
                                    onClick={() => handleCardClick(item.id)}
                                    onClickAddToBasket={()=>handleAddProductToBasket(item)}
                                    onClickAddToFavourites={()=>handleAddProductToFavourites(item)}
                                />
                            ))
                        ) : (
                            <Text>Loading products...</Text>
                        )
                    )}



                </>
            }></ItemsHeaderNavbarLayout>



    );
};

export default ProductsScreen;