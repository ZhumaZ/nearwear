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
import { useSelector } from "react-redux";
import axios from "axios";
import { env } from "../../env";

const OrderSummaryPage = ({ route, navigation }) => {
    const [value, setValue] = React.useState("bkash");
    const [vh, vw] = useDimensions();
    const user = useSelector((state) => state.user);

    const handleOrder = async () => {
        console.log("running");
        const response = await axios.put(
            `${env.BASE_URL}/order`,
            {
                userId: user.phone,
                dressId: route.params.dress?._id,
                dressTitle: route.params.dress?.title,
                dressImage: route.params.dress?.image,
                total: route.params.dress?.price,
                status: "pending",
                paymentMethod: value,
                deliveryAddress: route.params.data.address,
                orderedAt: Date.now().toString(),
            },
            {
                headers: {
                    Authorization: "Bearer " + user.token,
                },
            }
        );

        console.log(response);

        if (response.status === 200) {
            navigation.navigate("ORDERCONFIRM", {
                payVia: value,
                dressId: route.params.dress?._id,
                address: route.params.data.address,
            });
        }
    };

    return (
        <Box mb={5}>
            <ScrollView>
                <Card
                    width="full"
                    height={vh * 0.45}
                    height2="77%"
                    onPress={() => {}}
                    id={route.params.dress?._id}
                    key={route.params.dress?._id}
                    image={route.params.dress?.image}
                    title={route.params.dress?.title}
                    price={route.params.dress?.price}
                />

                <Box p={3}>
                    <Text>Phone: {user.phone}</Text>
                    <Text>Delivery Address: {route.params.data.address}</Text>
                    <Text>Duration: {route.params.dress?.time} Days</Text>
                </Box>
                <Spacer />
                <Box p={3}>
                    <Flex direction="row" justifyContent="space-between">
                        <Box>
                            <Text>{route.params.dress?.title}</Text>
                            <Text>Delivery Fees</Text>
                        </Box>
                        <Box>
                            <Text textAlign="right">
                                1 x {route.params.dress?.price}
                            </Text>
                            <Text textAlign="right">50</Text>
                        </Box>
                    </Flex>
                    <Box borderBottomWidth={1} my={2}></Box>
                    <Flex direction="row" justifyContent="space-between">
                        <Box>
                            <Text fontWeight="bold">Total</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold">
                                {parseInt(route.params.dress?.price) + 50}
                            </Text>
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
                m={3}
                p={3}
                top={vh * 0.7}
                onPress={handleOrder}
            >
                Confirm Order
            </Button>
        </Box>
    );
};

export default OrderSummaryPage;
