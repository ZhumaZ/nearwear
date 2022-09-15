import React from "react";
import { TouchableOpacity } from "react-native";
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
} from "native-base";
import CardList from "../components/CardList";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../components/Search";
import Points from "../components/Points";
import PointChart from "../components/Charts";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../theme";
import { useDimensions } from "../utils";

const DashboardPage = ({ rentor, provider }) => {
    const [vh, vw] = useDimensions();
    const admin = true;
    return (
        <ScrollView>
            <SafeAreaView>
                <Box p={3}>
                    <SearchBar />
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
                        <Flex direction="row" flexWrap="wrap">
                            <TouchableOpacity>
                                <Center
                                    width={vw * 0.46}
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
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Center
                                    width={vw * 0.46}
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
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Center
                                    width={vw * 0.46}
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
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Center
                                    width={vw * 0.46}
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
                            </TouchableOpacity>
                        </Flex>
                    ) : rentor ? (
                        <CardList />
                    ) : (
                        <Box
                            borderWidth={1}
                            p={3}
                            height={260}
                            borderColor={colors.primary[300]}
                            borderRadius={5}
                        >
                            <Box>
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
