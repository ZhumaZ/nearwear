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
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";
import { colors } from "../theme";
import { useDimensions } from "../utils";

const DashboardPage = () => {
    const [vh, vw] = useDimensions();
    const provider = true;
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
                        {provider ? (
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
                    </Flex>
                    {provider ? (
                        <Text fontWeight="bold" mb={3}>
                            Start creating your product for rent
                        </Text>
                    ) : (
                        <Button
                            width="15%"
                            p={0}
                            mb={2}
                            bgColor={colors.primary[300]}
                        >
                            Sharee
                        </Button>
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
                    ) : (
                        <CardList />
                    )}
                </Box>
                <Box p={3}>
                    <Heading>My Points</Heading>
                    <LineChart
                        data={{
                            labels: [
                                "January",
                                "February",
                                "March",
                                "April",
                                "May",
                                "June",
                            ],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                    ],
                                },
                            ],
                        }}
                        width={vw * 0.945} // from react-native
                        height={220}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "#fb8c00",
                            backgroundGradientTo: "#ffa726",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) =>
                                `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) =>
                                `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726",
                            },
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 5,
                        }}
                    />
                </Box>
            </SafeAreaView>
        </ScrollView>
    );
};

export default DashboardPage;
