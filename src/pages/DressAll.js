import React from "react";
import SearchBar from "../components/Search";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Flex, Text, ScrollView, Button, Center } from "native-base";
import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import CardList from "../components/CardList";
import { colors } from "../theme";
const DressAll = () => {
    return (
        <ScrollView>
            <SafeAreaView>
                <Box p={3}>
                    <Box>
                        <SearchBar />
                        <TouchableOpacity>
                            <Flex my={3} direction="row" alignItems="center">
                                <FontAwesome5 name="filter" color="black" />
                                <Text fontWeight="bold"> Filter</Text>
                            </Flex>
                        </TouchableOpacity>
                        <CardList />
                    </Box>
                    <Center>
                        <Button
                            bgColor={colors.primary[300]}
                            isLoading
                            isLoadingText="Loading..."
                        >
                            Show More
                        </Button>
                    </Center>
                </Box>
            </SafeAreaView>
        </ScrollView>
    );
};

export default DressAll;
