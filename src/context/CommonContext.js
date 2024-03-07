import React, {createContext, useState, useContext, useEffect} from 'react';
import CommonDataServices from "../api-services/CommonDataServices"

import AsyncStorage from '@react-native-async-storage/async-storage';

const CommonContext = createContext({});

const CommonDataService = new CommonDataServices();

export const CommonProvider = ({ children }) => {

    const [categories, setCategories] = useState(null);

    const [products,setProducts] = useState(null);

    const [currentProduct,setCurrentProduct] = useState(null);

    const [selectedCategory,setSelectedCategory]=useState(null);

    const [selectedProductId,setSelectedProductId]=useState(null);

    const [currentCategoryTypes,setCurrentCategoryTypes]=useState(null);

    const getAllCategories = async () => {
        try {
            setCategories(null);

            const response = await CommonDataService.getAllCategories();

            if (response !== null || response !== 'undefined') {
                setCategories(response);
            } else {
                throw new Error('Get Categories failed');
            }
        } catch (error) {
            console.error('Get Categories error:', error);
            throw error;
        }
    };

    const getAllProductsByCategoryId = async (categoryId) => {
        try {

            const response= await CommonDataService.getAllProductsByCategoryId(categoryId);


            if (response !==null || response !== 'undefined') {
                setProducts(response.products);
            } else {
                throw new Error('Get Products failed');
            }
        } catch (error) {
            console.error('Get Categories error:', error);
            throw error;
        }
    };

    const getProductDetailsById = async (productId) => {
        try {
            const response = await CommonDataService.getProductById(productId);

            if (response !== null || response !== 'undefined') {
                setCurrentProduct(response);
            } else {
                throw new Error('Get Product Details failed');
            }
        } catch (error) {
            console.error('Get Product Details error:', error);
            throw error;
        }
    };

    const getAllTypesByCategoryId = async (categoryId)=>{
        try {
            const response= await CommonDataService.getAllTypesByCategoryId(categoryId);

            if (response !== null && response !== undefined) {
                setCurrentCategoryTypes(response);
            } else {
                throw new Error('Get Types failed');
            }

        } catch (error) {
            console.error('Get Categories error:', error);
            throw error;
        }
    }

    return (
        <CommonContext.Provider value={{ categories, products, currentProduct, getAllCategories, getAllProductsByCategoryId, getProductDetailsById,selectedCategory,setSelectedCategory,selectedProductId,setSelectedProductId,getAllTypesByCategoryId,currentCategoryTypes }}>
            {children}
        </CommonContext.Provider>
    );
};

export const useCommon = () => useContext(CommonContext);




