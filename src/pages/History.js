import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import axios from "axios";
import { env } from "../../env";

const HistoryPage = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [historyModalVisible, setHistoryModalVisible] = useState(false);
    const [orders, setOrders] = useState([]);
    const [selectedDress, setSelectedDress] = useState(null);
    const user = useSelector((state) => state.user);

    const handleSingleHistoryClick = async (dressId, deliveryAddress) => {
        const response = await axios.get(`${env.BASE_URL}/dress`, {
            params: {
                _id: dressId,
            },
            headers: {
                Authorization: "Bearer " + user.token,
            },
        });

        if (response.status === 200) {
            setSelectedDress({ ...response.data, deliveryAddress });
        }
        setHistoryModalVisible(true);
    };

    const renderHistoryCards = () => {
        return orders.map((order) => (
            <HistoryCard
                key={order._id}
                id={order._id}
                dressId={order.dressId}
                image={order.dressImage}
                title={order.dressTitle}
                total={order.total}
                deliveryAddress={order.deliveryAddress}
                onPress={handleSingleHistoryClick}
            />
        ));
    };

    const fetchData = async () => {
        const response = await axios.get(`${env.BASE_URL}/orders`, {
            params: {
                userId: user.phone,
            },
            headers: {
                Authorization: "Bearer " + user.token,
            },
        });

        if (response.status === 200) {
            setOrders(response.data);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

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
                            <ProductSingleCard
                                title={selectedDress?.title}
                                image={selectedDress?.image}
                            />
                            <Box p={3}>
                                <Flex>
                                    <Text
                                        color="black"
                                        textAlign="justify"
                                        flex={1}
                                        my={5}
                                    >
                                        {selectedDress?.description}
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
                                            <Text>
                                                {selectedDress?.price} TK
                                            </Text>
                                            <Text>{selectedDress?.time}</Text>
                                            <Text>
                                                {selectedDress?.deliveryAddress}
                                            </Text>
                                            <Text>{selectedDress?.status}</Text>
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
                        <Box pb={3}>
                            <Button mb={1} onPress={fetchData}>
                                Refresh
                            </Button>
                            {renderHistoryCards()}
                        </Box>
                    </Box>
                </Box>
            </SafeAreaView>
        </ScrollView>
    );
};

export default HistoryPage;
