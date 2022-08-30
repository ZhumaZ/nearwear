import React from "react";
import {
    Avatar,
    Box,
    Heading,
    ScrollView,
    Flex,
    Spacer,
    Button,
} from "native-base";
import CardList from "../components/CardList";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../components/Search";
import Points from "../components/Points";
import { colors } from "../theme";
const DashboardPage = () => {
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
                        <Box my={2}>
                            <Heading color="black">Let's build your</Heading>
                            <Heading color="black">dream wardrobe</Heading>
                        </Box>
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
                    <Button
                        width="15%"
                        p={0}
                        mb={2}
                        bgColor={colors.primary[300]}
                    >
                        Sharee
                    </Button>
                    <CardList />
                </Box>
            </SafeAreaView>
        </ScrollView>
    );
};

export default DashboardPage;
