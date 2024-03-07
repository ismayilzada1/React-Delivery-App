import React, {useEffect} from 'react';
import {View, Text,TouchableOpacity} from "react-native";
import styles from './styles';
import ItemsHeaderNavbarLayout from "../../components/sections/Headers/ItemsHeaderNavbarLayout/ItemsHeaderNavbarLayout";
import {useNavigation} from "@react-navigation/native";
import {useAuth} from "../../context/AuthContext";
import {useBasket} from "../../context/BasketContext";

const HistoryScreen = ({title = "History", backgroundImage}) => {

    const {
        history,
        getUserHistory
    } = useBasket();

    const {
        getUserToken
    }=useAuth();

    const navigation = useNavigation();

    const handleBackClick = () => {
        navigation.navigate('UserProfile', {screen: 'Profile'});
    };

    useEffect(() => {
        const getHistory=async ()=>{
            const token=await getUserToken();
            const response=await getUserHistory(token);
        }

        getHistory();
        console.log(history);
    }, []);


    const handleHistoryRowClick=(products,date)=>{
        navigation.navigate('HistoryProducts', {products: products,orderDate:dateConverter(date) });
    }

    const dateConverter = (dateString) => {
        const date = new Date(dateString);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    };



    return (

            <ItemsHeaderNavbarLayout searchIsShown={false} onClick={handleBackClick} title={title}
                                     backgroundImage={backgroundImage} main={
                <>
                        {history ? (
                                <View style={styles.rowContainer}>
                                    {history.map((item, index) => (
                                        <TouchableOpacity key={index} onPress={() => handleHistoryRowClick(item.products,item.orderDate)} style={styles.dateTouchable}>
                                            <Text style={styles.dateText}>{dateConverter(item.orderDate)}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                        ) : (
                            <Text>Loading category Types...</Text>
                        )}

                </>
            }></ItemsHeaderNavbarLayout>


    );
};

export default HistoryScreen;