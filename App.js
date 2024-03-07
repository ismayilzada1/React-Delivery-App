import {NavigationContainer} from "@react-navigation/native"
import BaseStackNavigation from "./src/navigation/BaseStackNavigation";
import {AuthProvider, useAuth} from "./src/context/AuthContext";
import {CommonProvider} from "./src/context/CommonContext";
import {BasketProvider} from "./src/context/BasketContext"
import {FavouritesProvider} from "./src/context/FavouriteContext";
import {useEffect} from "react";

export default function App() {

    // const {getUser}=useAuth();

    // useEffect(()=>{
    //     async()=>{
    //         getUser();
    //     }
    // },[getUser])


    return (
        <AuthProvider>
            <CommonProvider>
                <FavouritesProvider>
                    <BasketProvider>
                        <NavigationContainer>
                            <BaseStackNavigation/>
                        </NavigationContainer>
                    </BasketProvider>
                </FavouritesProvider>
            </CommonProvider>
        </AuthProvider>
    );
}
