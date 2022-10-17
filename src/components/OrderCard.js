import React, { useEffect, useState } from "react";
import {
    Pressable,
    Flex,
    Image,
    Text,
    Button,
    Modal,
    FormControl,
    Select,
} from "native-base";
import { AirbnbRating } from "react-native-ratings";
import { colors } from "../theme";
import axios from "axios";
import { env } from "../../env";
import { useSelector } from "react-redux";
import { useDimensions } from "../utils";

const OrderCard = (props) => {
    const [vw, vh] = useDimensions();
    const [rentor, setRentor] = useState(null);
    const [provider, setProvider] = useState(null);
    const [dress, setDress] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [status, setStatus] = useState(null);
    const user = useSelector((state) => state.user);
    useEffect(() => {
        (async () => {
            const response = await axios.get(`${env.BASE_URL}/user`, {
                params: {
                    phone: props?.userId,
                },
                headers: {
                    Authorization: "Bearer " + user.token,
                },
            });

            console.log("response user ------>", response.data);

            if (response.status === 200) {
                setRentor(response.data);
            }

            const dressResponse = await axios.get(`${env.BASE_URL}/dress`, {
                params: {
                    _id: props?.dressId,
                },
                headers: {
                    Authorization: "Bearer " + user.token,
                },
            });

            console.log("response dress ------>", dressResponse.data);

            if (dressResponse.status === 200) {
                const response = await axios.get(`${env.BASE_URL}/user`, {
                    params: {
                        phone: dressResponse.data?.ownerId,
                    },
                    headers: {
                        Authorization: "Bearer " + user.token,
                    },
                });

                console.log("response provider ------>", response.data);

                if (response.status === 200) {
                    setProvider(response.data);
                }
                setDress(dressResponse.data);
            }
        })();
    }, []);

    useEffect(() => {
        async () => {};
    }, [dress]);

    return (
        <Pressable
            borderWidth={1}
            borderColor={colors.primary[300]}
            borderRadius={5}
            bgColor="#fff"
            mb={1}
            onPress={() => props.onPress(props.id)}
            py={1}
        >
            <Modal
                isOpen={modalVisible}
                onClose={() => setModalVisible(false)}
                opacity={0.9}
            >
                <Modal.Content>
                    <Modal.CloseButton />
                    <Modal.Header>Change Status</Modal.Header>
                    <Modal.Body bgColor="red">
                        <FormControl isRequired>
                            <Select
                                color="black"
                                placeholder="Select Status"
                                textAlign="center"
                                placeholderTextColor="black"
                                onValueChange={(value) => setStatus(value)}
                            >
                                <Select.Item label="Pending" value="pending" />
                                <Select.Item
                                    label="On-Delivery"
                                    value="on-delivery"
                                />
                                <Select.Item
                                    label="Delivered"
                                    value="delivered"
                                />
                            </Select>
                        </FormControl>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button
                                variant="ghost"
                                colorScheme="blueGray"
                                onPress={() => {
                                    setModalVisible(false);
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                onPress={() => {
                                    props.onManage(props?._id, status);
                                    setModalVisible(false);
                                }}
                            >
                                Submit
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
            <Flex direction="row" height={20} justifyContent="space-between">
                <Flex direction="row" justifyContent="center">
                    <Image
                        source={{
                            uri: props?.dressImage,
                        }}
                        alt="Sharee"
                        width={20}
                        height={20}
                        borderTopLeftRadius={5}
                        borderBottomLeftRadius={5}
                    />
                    <Flex ml={2} alignItems="flex-start">
                        <Text fontWeight="bold" fontSize={13}>
                            {props?.dressTitle}
                        </Text>
                        <AirbnbRating size={7} showRating={false} />
                        <Text fontSize={10}>
                            Provider:{" "}
                            <Text color={colors.primary[300]}>
                                {provider?.name}
                            </Text>
                        </Text>
                        <Text fontSize={10}>
                            Rentor:{" "}
                            <Text color={colors.primary[300]}>
                                {rentor?.name}
                            </Text>
                        </Text>
                        <Text fontSize={10}>
                            Price: <Text fontWeight="bold">{dress?.price}</Text>
                        </Text>
                    </Flex>
                </Flex>

                <Flex mr={2} justifyContent="center">
                    <Button
                        py={0.5}
                        px={3}
                        bgColor={colors.primary[300]}
                        onPress={() => props.onPress(props.id)}
                    >
                        View Info
                    </Button>
                    <Button
                        py={0.5}
                        px={3}
                        mt={0.5}
                        bgColor={colors.primary[300]}
                        onPress={() => props.onSendMessage(props.id)}
                    >
                        Send Message
                    </Button>
                    <Button
                        py={0.5}
                        px={3}
                        mt={0.5}
                        bgColor={colors.primary[300]}
                        onPress={() => setModalVisible(true)}
                    >
                        Manage Order
                    </Button>
                </Flex>
            </Flex>
        </Pressable>
    );
};
{
}
export default OrderCard;
