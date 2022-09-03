import React from "react";
import {
    Box,
    Text,
    Flex,
    ScrollView,
    Spacer,
    Radio,
    Center,
    Button,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";
import { useDimensions } from "../utils";
import { colors } from "../theme";

const OrderSummaryPage = () => {
    const [value, setValue] = React.useState("bkash");
    const [vh, vw] = useDimensions();

    return (
        <SafeAreaView>
            <ScrollView mb={10}>
                <Flex alignItems="center">
                    <Card width="full" height={vh * 0.45} height2="77%" />
                </Flex>
                <Box p={3}>
                    <Text>Full Name: Tania Aktar</Text>
                    <Text>Email Address: tania.aktar.cse@ulab.edu.bd</Text>
                    <Text>Phone: +880 1553835434</Text>
                    <Text>Delivery Address: Dhanmondi, Dhaka</Text>
                    <Text>From: 3/3/3333</Text>
                    <Text>From: 4/4/4444</Text>
                </Box>
                <Spacer />
                <Box p={3}>
                    <Flex direction="row" justifyContent="space-between">
                        <Box>
                            <Text>Silk Sharee</Text>
                            <Text>Delivery Fees</Text>
                        </Box>
                        <Box>
                            <Text textAlign="right">1 x 500</Text>
                            <Text textAlign="right">50</Text>
                        </Box>
                    </Flex>
                    <Box borderBottomWidth={1} my={2}></Box>
                    <Flex direction="row" justifyContent="space-between">
                        <Box>
                            <Text fontWeight="bold">Total</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold">550</Text>
                        </Box>
                    </Flex>
                    <Center my={10}>
                        <Radio.Group
                            name="myRadioGroup"
                            accessibilityLabel="favorite number"
                            value={value}
                            onChange={(nextValue) => {
                                setValue(nextValue);
                            }}
                        >
                            <Radio value="bkash" my={1}>
                                Pay with bKash
                            </Radio>
                            <Radio value="nagad" my={1}>
                                Pay with Nagad
                            </Radio>
                            <Radio value="cod" my={1}>
                                Cash on Delivery
                            </Radio>
                        </Radio.Group>
                    </Center>
                </Box>
            </ScrollView>
            <Button
                bgColor={colors.primary[300]}
                position="absolute"
                width={vw * 0.94}
                mx={3}
                top={vh * 0.85}
            >
                Confirm Order
            </Button>
        </SafeAreaView>
    );
};

export default OrderSummaryPage;
