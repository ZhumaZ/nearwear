import React, { useState } from "react";
import SearchBar from "../components/Search";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Box,
    Flex,
    Text,
    ScrollView,
    Button,
    Center,
    Modal,
    Pressable,
    Spacer,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import CardList from "../components/CardList";
import { colors } from "../theme";
import HistoryCard from "../components/HistoryCard";
import ProductSingleCard from "../components/ProductSingleCard";
import ReviewList from "../components/ReviewList";
const HistoryPage = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [historyModalVisible, setHistoryModalVisible] = useState(false);
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const handleSingleHistoryClick = () => {
        setHistoryModalVisible(true);
    };

    const renderHistoryCards = () => {
        return data.map((item) => (
            <HistoryCard key={item} onPress={handleSingleHistoryClick} />
        ));
    };
    return (
        <ScrollView>
            <SafeAreaView>
                <Modal
                    isOpen={modalVisible}
                    onClose={() => setModalVisible(false)}
                    opacity={0.9}
                >
                    <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Body bgColor="red">
                            <Text fontWeight="bold">Sort By</Text>
                            <Pressable>
                                <Text>Date</Text>
                            </Pressable>
                            <Pressable>
                                <Text>Date</Text>
                            </Pressable>
                            <Pressable>
                                <Text>Date</Text>
                            </Pressable>
                            <Pressable>
                                <Text>Date</Text>
                            </Pressable>
                            <Pressable>
                                <Text>Date</Text>
                            </Pressable>
                            <Pressable>
                                <Text>Date</Text>
                            </Pressable>
                            <Text fontWeight="bold">Filter By</Text>
                            <Pressable>
                                <Text>Date</Text>
                            </Pressable>
                            <Pressable>
                                <Text>Date</Text>
                            </Pressable>
                            <Pressable>
                                <Text>Date</Text>
                            </Pressable>
                            <Pressable>
                                <Text>Date</Text>
                            </Pressable>
                            <Pressable>
                                <Text>Date</Text>
                            </Pressable>
                            <Pressable>
                                <Text>Date</Text>
                            </Pressable>
                        </Modal.Body>
                    </Modal.Content>
                </Modal>
                <Modal
                    isOpen={historyModalVisible}
                    onClose={() => setHistoryModalVisible(false)}
                    opacity={0.9}
                >
                    <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Body bgColor="red">
                            <ProductSingleCard />
                            <Box p={3}>
                                <Flex>
                                    <Text
                                        color="black"
                                        textAlign="justify"
                                        flex={1}
                                        my={5}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Pellentesque viverra
                                        ornare eleifend. Nam eget consectetur
                                        ipsum. Nam eu urna rutrum, ullamcorper
                                        urna ut, aliquet nisi. Morbi sagittis,
                                        tellus vitae varius tristique, arcu
                                        metus vestibulum arcu, sed hendrerit
                                        massa nunc at metus.
                                    </Text>
                                    <Flex
                                        direction="row"
                                        justifyContent="center"
                                    >
                                        <Box>
                                            <Text fontWeight="bold">Price</Text>
                                            <Text fontWeight="bold">Days</Text>
                                            <Text fontWeight="bold">
                                                Location
                                            </Text>
                                            <Text fontWeight="bold">
                                                Status
                                            </Text>
                                        </Box>
                                        <Box width={5}></Box>
                                        <Box>
                                            <Text>300 TK</Text>
                                            <Text>5</Text>
                                            <Text>Dhanmondi</Text>
                                            <Text>On Rent</Text>
                                        </Box>
                                    </Flex>
                                </Flex>

                                <Spacer size={2} />
                                <Text
                                    color="black"
                                    fontWeight="bold"
                                    fontSize={18}
                                >
                                    Reviews
                                </Text>
                                <Spacer size={2} />
                                <ReviewList />
                            </Box>
                        </Modal.Body>
                    </Modal.Content>
                </Modal>
                <Box p={3}>
                    <Box>
                        <SearchBar />
                        <Pressable onPress={() => setModalVisible(true)}>
                            <Flex my={3} direction="row" alignItems="center">
                                <FontAwesome5 name="filter" color="black" />
                                <Text fontWeight="bold"> Filter</Text>
                            </Flex>
                        </Pressable>
                        <Box pb={3}>{renderHistoryCards()}</Box>
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

export default HistoryPage;
