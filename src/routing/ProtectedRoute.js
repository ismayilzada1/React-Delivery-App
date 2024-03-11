import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ProtectedRoute = ({ children }) => {
    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            console.log("a");
            try {
                const value = await AsyncStorage.getItem('jwtToken');
                if (value !== null && value !== undefined && value !== 'null' && value !== 'undefined') {
                    console.log(value);
                } else {
                    navigation.navigate('Login');
                }
            } catch (error) {
                console.log(error);
            }
        };

        checkToken();
    }, [navigation]);

    return children;
};

export default ProtectedRoute;