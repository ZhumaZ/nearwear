import React from "react";
import { Box, Image, Flex, Text, Button, Pressable } from "native-base";
import { AirbnbRating } from "react-native-ratings";
import { colors } from "../theme";
const HistoryCard = (props) => {
    return (
        <Pressable
            borderWidth={1}
            borderColor={colors.primary[300]}
            borderRadius={5}
            bgColor="#fff"
            mb={1}
            onPress={() => props.onPress(props.dressId, props.deliveryAddress)}
        >
            <Flex direction="row" height={16} justifyContent="space-between">
                <Flex direction="row" justifyContent="center">
                    <Image
                        source={{
                            uri: props.image,
                        }}
                        alt="Sharee"
                        width={16}
                        height={16}
                        borderTopLeftRadius={5}
                        borderBottomLeftRadius={5}
                    />
                    <Flex ml={2} alignItems="flex-start">
                        <Text fontWeight="bold" fontSize={13}>
                            {props.title}
                        </Text>
                        <AirbnbRating size={7} showRating={false} />
                        <Text fontSize={10}>Order ID: {props.id}</Text>
                    </Flex>
                </Flex>

                <Flex mr={2} justifyContent="center">
                    <Text textAlign="center" fontWeight="bold">
                        {props.total} TK
                    </Text>
                    <Button
                        py={0.5}
                        px={3}
                        mt={0.5}
                        bgColor={colors.primary[300]}
                        onPress={props.onPress}
                    >
                        View
                    </Button>
                </Flex>
            </Flex>
        </Pressable>
    );
};

export default HistoryCard;
