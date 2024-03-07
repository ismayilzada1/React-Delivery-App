import React, {useEffect, useState} from 'react';
import ItemsHeaderNavbarLayout from "../../components/sections/Headers/ItemsHeaderNavbarLayout/ItemsHeaderNavbarLayout";
import {useNavigation} from "@react-navigation/native";
import {useCommon} from "../../context/CommonContext";
import CustomItemCard from "../../components/customs/CustomItemCard/CustomItemCard";
import {Text} from "react-native";

const CategoriesScreen = () => {

    const {
        setSelectedCategory,
        categories,
        getAllCategories,
    } = useCommon();


    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCategories, setFilteredCategories] = useState([]);

    const navigation = useNavigation();

    const handleCardClick = (selectedCategory) => {
        setSelectedCategory(selectedCategory);
        navigation.navigate('Home', {screen: 'ProductsScreen'});
    };

    const handleBackClick = () => {
        console.log("a");
        navigation.navigate('WelcomeScreen');
    };



    useEffect(() => {
        const GetAllCategories = async ()=>{
            console.log('UseEffect GetAllCategories')
            const response = await getAllCategories();
            console.log(response)
        }

        GetAllCategories();
    }, [])

    useEffect(() => {
        const filterCategories = () => {
            if (categories) {
                let filtered = [...categories];
                if (searchQuery !== '') {
                    filtered = filtered.filter(category =>
                        category.name.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                }
                setFilteredCategories(filtered);
            }
        };

        filterCategories();
    }, [searchQuery, categories]);


    const handleSearchBarChange = (query) => {
        setSearchQuery(query);
    }


    return (

            <ItemsHeaderNavbarLayout
                searchIsShown={true}
                onSearchBarValueChange={handleSearchBarChange}
                title={"Categories"}
                onClick={handleBackClick}
                main={




                    (filteredCategories && filteredCategories.length > 0 ? (
                        filteredCategories.map((item) => (
                            <CustomItemCard
                                onClick={() => handleCardClick(item)}
                                key={item?.id}
                                imageSource={item?.imageUrl}
                                productName={item?.name}
                                quantity={item?.productsQuantity}
                            />
                        ))
                    ) : (categories && categories.length > 0 ? (
                            categories.map((item) => (
                                <CustomItemCard
                                    onClick={() => handleCardClick(item)}
                                    key={item?.id}
                                    imageSource={item?.imageUrl}
                                    productName={item?.name}
                                    quantity={item?.productsQuantity}
                                />
                            ))
                        ) : (
                            <Text>No categories found.</Text>
                        )
                    ))



                }></ItemsHeaderNavbarLayout>


    );
};

export default CategoriesScreen;