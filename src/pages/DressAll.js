import React, {useState} from "react";
import SearchBar from "../components/Search";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Flex, Text, ScrollView, Button, Center, Modal, Pressable } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import CardList from "../components/CardList";
import { colors } from "../theme";
const DressAll = () => {
    const [modalVisible, setModalVisible] = useState(false);
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
                <Box p={3}>
                    <Box>
                        <SearchBar />
                        <Pressable onPress={() => setModalVisible(true)}>
                            <Flex my={3} direction="row" alignItems="center">
                                <FontAwesome5 name="filter" color="black" />
                                <Text fontWeight="bold"> Filter</Text>
                            </Flex>
                        </Pressable>
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
