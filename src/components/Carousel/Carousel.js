import {
    FlatList,
    Image,
    View,
    Dimensions,
} from "react-native";
import styles from "./styles"
import React, { useEffect, useRef, useState } from "react";

const Carousel = ({images}) => {
    const flatlistRef = useRef();
    const screenWidth = Dimensions.get("window").width;
    const screenHeight= Dimensions.get("window").height;
    const imageHeight=screenHeight*0.4
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            if (activeIndex === carouselData.length - 1) {
                flatlistRef.current.scrollToIndex({
                    index: 0,
                    animation: true,
                });
            } else {
                flatlistRef.current.scrollToIndex({
                    index: activeIndex + 1,
                    animation: true,
                });
            }
        }, 2000);

        return () => clearInterval(interval);
    });

    const getItemLayout = (data, index) => ({
        length: screenWidth,
        offset: screenWidth * index,
        index: index,
    });

    const carouselData = images.map((image, index) => ({
        id: `0${index + 1}`,
        image: image,
    }));


    const renderItem = ({ item, index }) => {
        return (
            <View>
                <Image
                    source={{uri:item.image}}
                    style={{ height: imageHeight, width: screenWidth,zIndex:-1 }}
                />
            </View>
        );
    };

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;

        const index = scrollPosition / screenWidth;

        setActiveIndex(index);
    };

    const renderDotIndicators = () => {
        return carouselData.map((dot, index) => {

            if (activeIndex === index) {
                return (
                    <View
                        key={index}
                        style={{
                            backgroundColor: "#fff",
                            height: 10,
                            width: 10,
                            borderRadius: 5,
                            marginHorizontal: 6,
                        }}
                    ></View>
                );
            } else {
                return (
                    <View
                        key={index}
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.5)",
                            height: 10,
                            width: 10,
                            borderRadius: 5,
                            marginHorizontal: 6,
                        }}
                    ></View>
                );
            }
        });
    };

    return (
        <View>
            <View style={styles.indicatorContainer}>
                {renderDotIndicators()}
            </View>

            <FlatList
                data={carouselData}
                ref={flatlistRef}
                getItemLayout={getItemLayout}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                pagingEnabled={true}
                onScroll={handleScroll}
            />

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: 30,
                }}>
            </View>
        </View>
    );
};

export default Carousel;

