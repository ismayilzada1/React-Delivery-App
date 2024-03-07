import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavouritesContext = createContext([]);

export const FavouritesProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const loadFavorites = async () => {
            try {
                const storedFavourites = await AsyncStorage.getItem('favourites');
                if (storedFavourites) {
                    setFavourites(JSON.parse(storedFavourites));
                }
            } catch (error) {
                console.error('Error loading favourites:', error);
            }
        };
        loadFavorites();
    }, []);

    useEffect(() => {
        const saveFavorites = async () => {
            try {
                await AsyncStorage.setItem('favourites', JSON.stringify(favourites));
            } catch (error) {
                console.error('Error saving favourites:', error);
            }
        };
        saveFavorites();
    }, [favourites]);


    const addProductToFavourites = (productToAdd) => {
        const isProductInFavorites = favourites.find(product => product.id === productToAdd.id);
        if (!isProductInFavorites) {
            const newFavourites = [...favourites, productToAdd];
            setFavourites(newFavourites);
        } else {
            console.log("Product already exists in favorites.");
        }
    };


    const removeProductFromFavourites = (productIdToRemove) => {
        const updatedFavourites = favourites.filter(product => product.id !== productIdToRemove);
        setFavourites(updatedFavourites);
    };


    useEffect(() => {
        console.log(favourites);
    }, [favourites]);



    return (
        <FavouritesContext.Provider value={{favourites , addProductToFavourites,removeProductFromFavourites}}>
            {children}
        </FavouritesContext.Provider>
    );
};

export const useFavourites = () => useContext(FavouritesContext);
