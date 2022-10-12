import React, { useEffect, useState } from "react";
import {
    VStack,
    FormControl,
    Input,
    Button,
    Pressable,
    Row,
    TextArea,
    ScrollView,
    Text,
    Select,
    Checkbox,
    Modal,
    Box,
    Image,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useDimensions } from "../utils";
import { colors } from "../theme";
import useAxios from "axios-hooks";
import { env } from "../../env";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import axios from "axios";
import { useSelector } from "react-redux";

const DressAdd = ({ route, navigation }) => {
    const [formData, setData] = useState({});
    const [vh, vw] = useDimensions();
    const [modalVisible, setModalVisible] = useState(false);
    const [{ data, error }, refetch] = useAxios({}, { manual: true });

    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (data) {
            (async () => {
                const response = await axios.put(
                    `${env.BASE_URL}/dress`,
                    {
                        title: formData.title,
                        image: data.data.display_url,
                        category: formData.category,
                        time: formData.time,
                        price: formData.price,
                        description: formData.description,
                        ownerId: user.phone,
                    },
                    {
                        headers: {
                            Authorization: "Bearer " + user.token,
                        },
                    }
                );

                if (response.status === 200) {
                    navigation.navigate("DRESSADDCOMPLETE", {
                        dress: response.data,
                    });
                }
            })();
        }
    }, [data, error]);
    console.log(data, error);
    const pickImage = async () => {
        console.log("pickinggg");
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setData({ ...formData, image: result });
        }
    };

    console.log(formData);

    return (
        <SafeAreaView>
            <ScrollView>
                <Modal
                    isOpen={modalVisible}
                    onClose={() => setModalVisible(false)}
                    opacity={0.9}
                >
                    <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>Terms & Conditions</Modal.Header>
                        <Modal.Body bgColor="red">TOC goes here</Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={2}>
                                <Button
                                    variant="ghost"
                                    colorScheme="blueGray"
                                    onPress={() => {
                                        setModalVisible(false);
                                    }}
                                >
                                    Disagree
                                </Button>
                                <Button
                                    onPress={() => {
                                        setData({
                                            ...formData,
                                            agree: !formData.agree,
                                        });
                                        setModalVisible(false);
                                    }}
                                >
                                    Agree
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
                <VStack width="90%" mx="3" maxW="300px">
                    <FormControl isRequired width={vw * 0.94}>
                        <FormControl.Label
                            _text={{
                                bold: true,
                            }}
                        >
                            Dress Title
                        </FormControl.Label>
                        <Input
                            placeholder="Enter title"
                            onChangeText={(value) =>
                                setData({ ...formData, title: value })
                            }
                        />
                    </FormControl>
                    <FormControl isRequired width={vw * 0.94}>
                        <FormControl.Label
                            _text={{
                                bold: true,
                            }}
                        >
                            Uplaod Picture
                        </FormControl.Label>
                        <Pressable onPress={pickImage}>
                            {!formData.image ? (
                                <MaterialIcons
                                    name="upload-file"
                                    size={100}
                                    color="black"
                                />
                            ) : (
                                <Box>
                                    <Image
                                        source={{ uri: formData.image.uri }}
                                        width={100}
                                        height={100}
                                        alt={
                                            formData.image.uri.split("/")[
                                                formData.image.uri.split("/")
                                                    .length - 1
                                            ]
                                        }
                                    />
                                    <Text mb={2}>
                                        {
                                            formData.image.uri.split("/")[
                                                formData.image.uri.split("/")
                                                    .length - 1
                                            ]
                                        }
                                    </Text>
                                </Box>
                            )}
                        </Pressable>
                        {formData.image?.name && (
                            <Text>
                                {formData.image?.name.slice(0, 12) + "..."}
                            </Text>
                        )}
                    </FormControl>
                    <FormControl isRequired width={vw * 0.94}>
                        <FormControl.Label
                            _text={{
                                bold: true,
                            }}
                        >
                            Description
                        </FormControl.Label>
                        <TextArea
                            placeholder="Enter description"
                            onChangeText={(value) =>
                                setData({ ...formData, description: value })
                            }
                        />
                    </FormControl>
                    <FormControl isRequired width={vw * 0.94}>
                        <Select
                            color="black"
                            placeholder="Select Category"
                            textAlign="center"
                            placeholderTextColor="black"
                            onValueChange={(value) =>
                                setData({ ...formData, category: value })
                            }
                        >
                            <Select.Item label="Sharee" value="sharee" />
                            <Select.Item label="Jeans" value="jeans" />
                        </Select>
                    </FormControl>

                    <FormControl isRequired width={vw * 0.94}>
                        <FormControl.Label
                            _text={{
                                bold: true,
                            }}
                        >
                            Min number of days
                        </FormControl.Label>
                        <Input
                            onChangeText={(value) =>
                                setData({ ...formData, time: value })
                            }
                        />

                        <FormControl.HelperText
                            _text={{
                                fontSize: "xs",
                                color: "green.700",
                            }}
                        >
                            You earn 240 TK (60% return)
                        </FormControl.HelperText>
                        <FormControl.ErrorMessage
                            _text={{
                                fontSize: "xs",
                            }}
                        >
                            Error Name
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isRequired width={vw * 0.94}>
                        <FormControl.Label
                            _text={{
                                bold: true,
                            }}
                        >
                            Price (TK)
                        </FormControl.Label>
                        <Input
                            onChangeText={(value) =>
                                setData({ ...formData, price: value })
                            }
                        />

                        <FormControl.HelperText
                            _text={{
                                fontSize: "xs",
                                color: "green.700",
                            }}
                        >
                            You earn 240 TK (60% return)
                        </FormControl.HelperText>
                        <FormControl.ErrorMessage
                            _text={{
                                fontSize: "xs",
                            }}
                        >
                            Error Name
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isRequired width={vw * 0.94}>
                        <Checkbox
                            value="tc"
                            onChange={(value) => {
                                if (formData.agree !== true) {
                                    setModalVisible(true);
                                } else {
                                    setData({
                                        ...formData,
                                        agree: !formData.agree,
                                    });
                                }
                            }}
                            isChecked={formData.agree === true}
                            my={2}
                        >
                            I agree to Terms & Conditions
                        </Checkbox>

                        <FormControl.ErrorMessage
                            _text={{
                                fontSize: "xs",
                            }}
                        >
                            Error Name
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <Button
                        bgColor={colors.primary[300]}
                        width={vw * 0.94}
                        onPress={async () => {
                            const base64 = await FileSystem.readAsStringAsync(
                                formData.image.uri,
                                { encoding: "base64" }
                            );
                            console.log("baseee", base64);
                            let formD = new FormData();
                            formD.append("image", base64);
                            refetch({
                                method: "POST",
                                url: "https://api.imgbb.com/1/upload",
                                params: {
                                    key: env.IMAGE_API_KEY,
                                },
                                data: formD,
                                headers: {
                                    "Content-Type": "multipart/form-data",
                                },
                            });
                        }}
                    >
                        Submit
                    </Button>
                </VStack>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DressAdd;
