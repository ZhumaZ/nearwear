import React from "react";
import { Pressable, Flex, Image, Text, Button } from "native-base";
import { AirbnbRating } from "react-native-ratings";
import { colors } from "../theme";
const OrderCard = (props) => {
    return (
        <Pressable
            borderWidth={1}
            borderColor={colors.primary[300]}
            borderRadius={5}
            bgColor="#fff"
            mb={1}
            onPress={props.onPress}
            py={1}
        >
            <Flex direction="row" height={20} justifyContent="space-between">
                <Flex direction="row" justifyContent="center">
                    <Image
                        source={{
                            uri: "https://i.ibb.co/jMhzGZB/sharee.jpg",
                        }}
                        alt="Sharee"
                        width={20}
                        height={20}
                        borderTopLeftRadius={5}
                        borderBottomLeftRadius={5}
                    />
                    <Flex ml={2} alignItems="flex-start">
                        <Text fontWeight="bold" fontSize={13}>
                            Silk Sharee
                        </Text>
                        <AirbnbRating size={7} showRating={false} />
                        <Text fontSize={10}>
                            Provider:{" "}
                            <Text color={colors.primary[300]}>Tania Aktar</Text>
                        </Text>
                        <Text fontSize={10}>
                            Rentor:{" "}
                            <Text color={colors.primary[300]}>Stranger</Text>
                        </Text>
                        <Text fontSize={10}>
                            Price: <Text fontWeight="bold">300 TK</Text>
                        </Text>
                    </Flex>
                </Flex>

                <Flex mr={2} justifyContent="center">
                    <Button py={0.5} px={3} bgColor={colors.primary[300]}>
                        View Info
                    </Button>
                    <Button
                        py={0.5}
                        px={3}
                        mt={0.5}
                        bgColor={colors.primary[300]}
                    >
                        Send Message
                    </Button>
                    <Button
                        py={0.5}
                        px={3}
                        mt={0.5}
                        bgColor={colors.primary[300]}
                    >
                        Manage Order
                    </Button>
                </Flex>
            </Flex>
        </Pressable>
    );
};

export default OrderCard;
