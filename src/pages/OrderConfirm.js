import React from "react";
import Congratulations from "../components/Congratulations";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Flex, Text, Button } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../theme";
import { useDimensions } from "../utils";
const OrderConfirmPage = ({ route, navigation }) => {
    const [vh, vw] = useDimensions();

    return (
        <SafeAreaView>
            <Flex mx={3} height="full" justifyContent="center">
                <Box>
                    <Congratulations
                        bgColor="gray.200"
                        py={10}
                        text="Your order has been placed successfully"
                    />
                    <Flex direction="row" mt={5}>
                        <Entypo
                            name="info-with-circle"
                            size={20}
                            color={colors.primary[300]}
                        />

                        <Text ml={1} color="green.700">
                            You have earned 50 points! Let's check your nearwear
                            rewards?
                        </Text>
                    </Flex>
                    <Flex my={3} direction="row" justifyContent="space-between">
                        <Button
                            flex={1}
                            bgColor={colors.primary[300]}
                            onPress={() => navigation.navigate("SEARCH")}
                        >
                            Back to Shopping
                        </Button>
                        <Box mr={1}></Box>
                        <Button
                            flex={1}
                            bgColor={colors.primary[300]}
                            onPress={() =>
                                navigation.navigate("ProfileTab", {
                                    screen: "HISTORY",
                                })
                            }
                        >
                            Orders
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </SafeAreaView>
    );
};

export default OrderConfirmPage;
