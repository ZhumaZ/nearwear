import React, { useEffect, useState } from "react";
import {
    Avatar,
    Box,
    Heading,
    ScrollView,
    Flex,
    Spacer,
    Button,
    Text,
    Center,
    Pressable,
    View,
} from "native-base";
import CardList from "../components/CardList";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../components/Search";
import Points from "../components/Points";
import PointChart from "../components/Charts";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../theme";
import { useDimensions } from "../utils";
import OrderCard from "../components/OrderCard";
import OrderCardList from "../components/OrderCardList";
import { useSelector } from "react-redux";
import axios from "axios";
import { env } from "../../env";

const DashboardPage = ({ route, navigation }) => {
    const [vh, vw] = useDimensions();
    const [activeOrderBar, setActiveOrderBar] = useState("all");
    const [orderData, setOrderData] = useState([]);
    const rentor = route.params.type === "rentor" ? true : false;
    const provider = route.params.type === "provider" ? true : false;
    const admin = route.params.type === "admin" ? true : false;

    const user = useSelector((state) => state.user);

    // Admin click handlers
    const handleActiveOrderBar = async (value) => {
        let response;
        if (value !== "all") {
            response = await axios.get(`${env.BASE_URL}/orders`, {
                params: {
                    status: value,
                },
                headers: {
                    Authorization: "Bearer " + user.token,
                },
            });
        } else {
            response = await axios.get(`${env.BASE_URL}/orders`, {
                params: {},
                headers: {
                    Authorization: "Bearer " + user.token,
                },
            });
        }

        console.log("response ------>", response.data);

        if (response.status === 200) {
            setOrderData(response.data);
        }
        setActiveOrderBar(value);
    };

    const handleProductViewInfo = (value) => {
        console.log("View product - Id ", value);
        navigation.navigate("DRESSSINGLE", { id: value });
    };
    const handleSendMessage = (value) => {
        console.log("Send Message - Id ", value);
    };
    const handleManage = async (_id, status) => {
        console.log(_id, status, user.token);
        const response = await axios.patch(
            `${env.BASE_URL}/order`,
            {
                _id,
                status,
            },
            {
                headers: {
                    Authorization: "Bearer " + user.token,
                },
            }
        );

        console.log(response);
    };

    // Rentor click handlers
    const handleProductPress = (value) => {
        console.log("got product click of ID: ", value);
        navigation.navigate("PRODUCTSINGLE", { id: value });
    };

    // Common click handlers

    const handleSearch = (value) => {
        console.log("Searched for: ", value);
        navigation.navigate("OrderTab", {
            screen: "SEARCH",
            params: { searchTerm: value },
        });
    };

    useEffect(() => {
        handleActiveOrderBar("all");
    }, []);

    return (
        <ScrollView>
            <SafeAreaView>
                <Box p={3}>
                    <SearchBar onPress={handleSearch} />
                    <Flex
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        {!rentor ? (
                            <Box my={2}>
                                <Heading>Hi Tushpi</Heading>
                                <Heading fontSize={18}>Welcome back</Heading>
                            </Box>
                        ) : (
                            <Box my={2}>
                                <Heading>Let's build your</Heading>
                                <Heading>dream wardrobe</Heading>
                            </Box>
                        )}
                        {admin ? (
                            <Avatar
                                bg="amber.500"
                                borderColor={colors.primary[300]}
                                borderWidth={2}
                                source={{
                                    uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                                }}
                            >
                                TS
                            </Avatar>
                        ) : (
                            <Box>
                                <Flex
                                    direction="row"
                                    alignItems="center"
                                    borderWidth={1}
                                    borderColor={colors.primary[300]}
                                    px={2}
                                    borderRadius={4}
                                >
                                    <Points />
                                    <Spacer size={2} />
                                    <Avatar
                                        bg="amber.500"
                                        borderColor={colors.primary[300]}
                                        borderWidth={2}
                                        source={{
                                            uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                                        }}
                                    >
                                        TS
                                    </Avatar>
                                </Flex>
                            </Box>
                        )}
                    </Flex>
                    {provider ? (
                        <Text fontWeight="bold" mb={3}>
                            Start creating your product for rent
                        </Text>
                    ) : rentor ? (
                        <Button
                            width="15%"
                            p={0}
                            mb={2}
                            bgColor={colors.primary[300]}
                        >
                            Sharee
                        </Button>
                    ) : (
                        <></>
                    )}
                    {provider ? (
                        <Flex
                            direction="row"
                            flexWrap="wrap"
                            justifyContent="space-around"
                        >
                            <Pressable
                                onPress={() => navigation.navigate("DRESSADD")}
                            >
                                <Center
                                    width={vw * 0.45}
                                    height={vh * 0.3}
                                    bgColor={colors.primary[300]}
                                    borderRadius={5}
                                    mr={2}
                                    mb={2}
                                >
                                    <MaterialIcons
                                        name="post-add"
                                        size={24}
                                        color="black"
                                    />
                                    <Text>Add Dress</Text>
                                </Center>
                            </Pressable>

                            <Pressable
                                onPress={() => navigation.navigate("ONRENT")}
                            >
                                <Center
                                    width={vw * 0.45}
                                    height={vh * 0.3}
                                    bgColor={colors.primary[300]}
                                    borderRadius={5}
                                >
                                    <FontAwesome5
                                        name="money-bill-wave"
                                        size={24}
                                        color="black"
                                    />
                                    <Text>On Rent</Text>
                                </Center>
                            </Pressable>
                            <Pressable
                                onPress={() => navigation.navigate("SEARCH")}
                            >
                                <Center
                                    width={vw * 0.45}
                                    height={vh * 0.3}
                                    bgColor={colors.primary[300]}
                                    borderRadius={5}
                                    mr={2}
                                >
                                    <FontAwesome5
                                        name="list"
                                        size={24}
                                        color="black"
                                    />
                                    <Text>All Dresses</Text>
                                </Center>
                            </Pressable>
                            <Pressable
                                onPress={() =>
                                    navigation.navigate("ProfileTab", {
                                        screen: "HISTORY",
                                    })
                                }
                            >
                                <Center
                                    width={vw * 0.45}
                                    height={vh * 0.3}
                                    bgColor={colors.primary[300]}
                                    borderRadius={5}
                                >
                                    <FontAwesome5
                                        name="history"
                                        size={24}
                                        color="black"
                                    />
                                    <Text>History</Text>
                                </Center>
                            </Pressable>
                        </Flex>
                    ) : rentor ? (
                        <CardList onPress={handleProductPress} />
                    ) : (
                        <Box>
                            <Flex direction="row">
                                <Center w={5}>
                                    <Text
                                        textAlign="center"
                                        fontSize={10}
                                        bgColor="green.500"
                                        style={{
                                            transform: [{ rotateZ: "-90deg" }],
                                        }}
                                        width={200}
                                    >
                                        {
                                            "<------------------ Amount (TK) ------------------->"
                                        }
                                    </Text>
                                </Center>
                                <Box
                                    borderWidth={1}
                                    p={3}
                                    height={260}
                                    borderColor={colors.primary[300]}
                                    borderRadius={5}
                                    flex={1}
                                >
                                    <Flex
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="stretch"
                                    >
                                        <Box>
                                            <Text fontSize={10} pr={2}>
                                                Profit
                                            </Text>
                                            <Text fontSize={10} pr={2}>
                                                Total
                                            </Text>
                                            <Text fontSize={10} pr={2}>
                                                Cost
                                            </Text>
                                        </Box>
                                        <Flex justifyContent="space-around">
                                            <Box
                                                w={10}
                                                h={1.5}
                                                bgColor="green.700"
                                            ></Box>
                                            <Box
                                                w={10}
                                                h={1.5}
                                                bgColor={colors.primary[300]}
                                            ></Box>
                                            <Box
                                                w={10}
                                                h={1.5}
                                                bgColor="red.500"
                                            ></Box>
                                        </Flex>
                                    </Flex>

                                    <PointChart />
                                </Box>
                            </Flex>
                            <Center>
                                <Text fontSize={10}>
                                    {
                                        "<-------------------------- Date ------------------------>"
                                    }
                                </Text>
                            </Center>
                            <Box>
                                {/* Circles */}
                                <Flex
                                    mt={5}
                                    direction="row"
                                    justifyContent="space-around"
                                >
                                    <Box>
                                        <Center
                                            h="100px"
                                            w="100px"
                                            bgColor="green.700"
                                            borderRadius={100}
                                        >
                                            <Box></Box>
                                            <Center
                                                h="80px"
                                                w="80px"
                                                bgColor="white"
                                                position="absolute"
                                                borderRadius={100}
                                            >
                                                <Text
                                                    fontSize={30}
                                                    fontWeight="bold"
                                                >
                                                    145
                                                </Text>
                                                <Text mt={-2}>TK</Text>
                                            </Center>
                                        </Center>
                                    </Box>
                                    <Box>
                                        <Center
                                            h="100px"
                                            w="100px"
                                            bgColor={colors.primary[300]}
                                            borderRadius={100}
                                        >
                                            <Box></Box>
                                            <Center
                                                h="80px"
                                                w="80px"
                                                bgColor="white"
                                                position="absolute"
                                                borderRadius={100}
                                            >
                                                <Text
                                                    fontSize={30}
                                                    fontWeight="bold"
                                                >
                                                    145
                                                </Text>
                                                <Text mt={-2}>TK</Text>
                                            </Center>
                                        </Center>
                                    </Box>
                                    <Box>
                                        <Center
                                            h="100px"
                                            w="100px"
                                            bgColor="red.500"
                                            borderRadius={100}
                                        >
                                            <Box></Box>
                                            <Center
                                                h="80px"
                                                w="80px"
                                                bgColor="white"
                                                position="absolute"
                                                borderRadius={100}
                                            >
                                                <Text
                                                    fontSize={30}
                                                    fontWeight="bold"
                                                >
                                                    145
                                                </Text>
                                                <Text mt={-2}>TK</Text>
                                            </Center>
                                        </Center>
                                    </Box>
                                </Flex>
                                {/* Orders List */}
                                <Box mt={5}>
                                    <Flex
                                        direction="row"
                                        justifyContent="space-between"
                                        borderBottomWidth={3}
                                        borderColor={colors.primary[300]}
                                    >
                                        <Pressable
                                            onPress={() =>
                                                handleActiveOrderBar("all")
                                            }
                                        >
                                            <Box
                                                bgColor={
                                                    activeOrderBar === "all"
                                                        ? colors.primary[300]
                                                        : null
                                                }
                                                px={
                                                    activeOrderBar === "all"
                                                        ? 10
                                                        : 0
                                                }
                                                py={
                                                    activeOrderBar === "all"
                                                        ? 0.5
                                                        : 0
                                                }
                                                borderTopRightRadius={50}
                                                borderTopLeftRadius={50}
                                            >
                                                <Text
                                                    color={
                                                        activeOrderBar === "all"
                                                            ? "white"
                                                            : "black"
                                                    }
                                                    fontWeight={
                                                        activeOrderBar === "all"
                                                            ? "bold"
                                                            : "normal"
                                                    }
                                                >
                                                    All Orders
                                                </Text>
                                            </Box>
                                        </Pressable>
                                        <Pressable
                                            onPress={() =>
                                                handleActiveOrderBar("pending")
                                            }
                                        >
                                            <Box
                                                bgColor={
                                                    activeOrderBar === "pending"
                                                        ? colors.primary[300]
                                                        : null
                                                }
                                                px={
                                                    activeOrderBar === "pending"
                                                        ? 10
                                                        : 0
                                                }
                                                py={
                                                    activeOrderBar === "pending"
                                                        ? 0.5
                                                        : 0
                                                }
                                                borderTopRightRadius={50}
                                                borderTopLeftRadius={50}
                                            >
                                                <Text
                                                    color={
                                                        activeOrderBar ===
                                                        "pending"
                                                            ? "white"
                                                            : "black"
                                                    }
                                                    fontWeight={
                                                        activeOrderBar ===
                                                        "pending"
                                                            ? "bold"
                                                            : "normal"
                                                    }
                                                >
                                                    Pending
                                                </Text>
                                            </Box>
                                        </Pressable>
                                        <Pressable
                                            onPress={() =>
                                                handleActiveOrderBar(
                                                    "on-delivery"
                                                )
                                            }
                                        >
                                            <Box
                                                bgColor={
                                                    activeOrderBar ===
                                                    "on-delivery"
                                                        ? colors.primary[300]
                                                        : null
                                                }
                                                px={
                                                    activeOrderBar ===
                                                    "on-delivery"
                                                        ? 10
                                                        : 0
                                                }
                                                py={
                                                    activeOrderBar ===
                                                    "on-delivery"
                                                        ? 0.5
                                                        : 0
                                                }
                                                borderTopRightRadius={50}
                                                borderTopLeftRadius={50}
                                            >
                                                <Text
                                                    color={
                                                        activeOrderBar ===
                                                        "on-delivery"
                                                            ? "white"
                                                            : "black"
                                                    }
                                                    fontWeight={
                                                        activeOrderBar ===
                                                        "on-delivery"
                                                            ? "bold"
                                                            : "normal"
                                                    }
                                                >
                                                    On-Delivery
                                                </Text>
                                            </Box>
                                        </Pressable>
                                        <Pressable
                                            onPress={() =>
                                                handleActiveOrderBar(
                                                    "delivered"
                                                )
                                            }
                                        >
                                            <Box
                                                bgColor={
                                                    activeOrderBar ===
                                                    "delivered"
                                                        ? colors.primary[300]
                                                        : null
                                                }
                                                px={
                                                    activeOrderBar ===
                                                    "delivered"
                                                        ? 10
                                                        : 0
                                                }
                                                py={
                                                    activeOrderBar ===
                                                    "delivered"
                                                        ? 0.5
                                                        : 0
                                                }
                                                borderTopRightRadius={50}
                                                borderTopLeftRadius={50}
                                            >
                                                <Text
                                                    color={
                                                        activeOrderBar ===
                                                        "delivered"
                                                            ? "white"
                                                            : "black"
                                                    }
                                                    fontWeight={
                                                        activeOrderBar ===
                                                        "delivered"
                                                            ? "bold"
                                                            : "normal"
                                                    }
                                                >
                                                    Delivered
                                                </Text>
                                            </Box>
                                        </Pressable>
                                    </Flex>
                                    <Box my={1}>
                                        <OrderCardList
                                            data={orderData}
                                            onPress={handleProductViewInfo}
                                            onSendMessage={handleSendMessage}
                                            onManage={handleManage}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    )}
                </Box>

                {!admin && (
                    <Box p={3}>
                        <Heading>My Points</Heading>
                        <PointChart />
                        <Flex direction="row" justifyContent="space-around">
                            <Center>
                                <Text fontWeight="bold">Available</Text>
                                <Text fontSize={30} fontWeight="bold">
                                    188
                                </Text>
                                <Text>NW Points</Text>
                            </Center>
                            <Center
                                height="100%"
                                borderRightWidth={1}
                                borderRightColor="red"
                            ></Center>
                            <Center>
                                <Text fontWeight="bold">Earned</Text>
                                <Text fontSize={30} fontWeight="bold">
                                    654
                                </Text>
                                <Text>NW Points</Text>
                            </Center>
                            <Center
                                height="100%"
                                borderRightWidth={1}
                                borderRightColor="red"
                            ></Center>
                            <Center>
                                <Text fontWeight="bold">Total Spend</Text>
                                <Text fontSize={30} fontWeight="bold">
                                    434
                                </Text>
                                <Text>NW Points</Text>
                            </Center>
                        </Flex>
                    </Box>
                )}
            </SafeAreaView>
        </ScrollView>
    );
};

export default DashboardPage;
