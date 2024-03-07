import React from 'react';
import {View, Text, ImageBackground, Image} from "react-native";
import styles from './styles';
import HeaderNavBar from "../../components/sections/Headers/HeaderNavBar/HeaderNavBar";
import CustomButton from "../../components/customs/CustomButton/CustomButton";
import CustomTextInput from "../../components/customs/CustomTextInput/CustomTextInput";
import MasterCardIcon from "../../components/icons/MasterCardIcon/MasterCardIcon";
import CardCVCIcon from "../../components/icons/CardCVCIcon/CardCVCIcon";
const PaymentCardScreen = () => {


    return (
            <View style={styles.container}>

                <View style={styles.headerContainer}>
                    <HeaderNavBar titleShown={false}/>
                    <Text style={styles.headerText}>Credit / Debit card</Text>
                </View>

                <View style={styles.cardContainer}>


                    <View style={styles.card}>
                        <ImageBackground
                            source={require('../../../assets/images/card_bg.png')}
                            style={styles.cardBackground}
                            imageStyle={styles.cardBackgroundImageStyle}
                        >


                            <View style={styles.cardIconContainer}>

                                <Image style={styles.masterCardIcon}
                                       source={require('../../../assets/images/masterCardIcon.png')}/>
                            </View>

                            <View style={styles.cardNumberContainer}>
                                <Text style={styles.cardNumber}>4747 4747 4747 4747</Text>
                            </View>

                            <View style={styles.cardNameAndDateContainer}>
                                <Text style={styles.cardOwnerNameAndDate}>ALEXANDRA SMITH</Text>
                                <Text style={styles.cardOwnerNameAndDate}>07/21</Text>
                            </View>

                        </ImageBackground>

                    </View>

                    <Image style={styles.cameraIcon} source={require('../../../assets/images/cameraIcon.png')}/>

                </View>


                <View style={styles.inputsContainer}>

                    <CustomTextInput label={"Name on card"} placeholder={"Alexandra Smith"}/>
                    <CustomTextInput label={"Card Number"} placeholder={"4747 4747 4747 4747"} icon={<MasterCardIcon/>}/>


                    <View style={styles.rowInputs}>
                        <CustomTextInput label="Expiry date" containerStyle={styles.rowInputContainer} placeholder="07/21"/>
                        <CustomTextInput label="CVC" containerStyle={styles.rowInputContainer} placeholder="474" icon={<CardCVCIcon/>}/>
                    </View>

                </View>



                <View style={styles.buttonContainer}>
                    <CustomButton textShown={true} text="USE THIS CARD" iconShown={false} textStyles={styles.useThisCardButton}/>
                </View>

            </View>

    );
};

export default PaymentCardScreen;