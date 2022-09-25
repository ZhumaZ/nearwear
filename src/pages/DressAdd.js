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
    Stack,
    Select,
    WarningOutlineIcon,
    Checkbox,
    Modal,
    Box,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import * as DocumentPicker from "expo-document-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialIcons } from "@expo/vector-icons";
import { useDimensions } from "../utils";
import { colors } from "../theme";

const DressAdd = ({ route, navigation }) => {
    const [formData, setData] = useState({});
    const [vh, vw] = useDimensions();
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        console.log(JSON.stringify(formData.image, null, 2));
    }, [formData.image]);
    console.log(formData);
    return (
        <SafeAreaView>
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
                        placeholder="John"
                        onChangeText={(value) =>
                            setData({ ...formData, title: value })
                        }
                    />

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
                        Uplaod Picture
                    </FormControl.Label>
                    <Pressable
                        onPress={async () => {
                            const pickerResult =
                                await DocumentPicker.getDocumentAsync();
                            setData({ ...formData, image: pickerResult });
                        }}
                    >
                        <MaterialIcons
                            name="upload-file"
                            size={100}
                            color="black"
                        />
                    </Pressable>
                    {formData.image?.name && (
                        <Text>{formData.image?.name.slice(0, 12) + "..."}</Text>
                    )}

                    <FormControl.ErrorMessage
                        _text={{
                            fontSize: "xs",
                        }}
                    >
                        Error Name
                    </FormControl.ErrorMessage>
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

                    <FormControl.ErrorMessage
                        leftIcon={<WarningOutlineIcon size="xs" />}
                    >
                        Atleast 6 characters are required.
                    </FormControl.ErrorMessage>
                </FormControl>
                <Row justifyContent="space-between" width={vw * 0.94}>
                    <FormControl isRequired width={vw * 0.45}>
                        <FormControl.Label
                            _text={{
                                bold: true,
                            }}
                        >
                            From
                        </FormControl.Label>
                        <Button
                            bgColor={colors.primary[300]}
                            onPress={() => setShowDatePicker(true)}
                        >
                            {formData.startDate
                                ? `${formData.startDate.getDate()}/${formData.startDate.getMonth()}/${formData.startDate.getFullYear()}`
                                : "Select Date"}
                        </Button>
                        {showDatePicker && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={new Date()}
                                mode="date"
                                is24Hour={true}
                                onChange={(e, value) => {
                                    setShowDatePicker(false);
                                    if (value) {
                                        setData({
                                            ...formData,
                                            startDate: value,
                                        });
                                    }
                                }}
                            />
                        )}

                        <FormControl.ErrorMessage
                            _text={{
                                fontSize: "xs",
                            }}
                        >
                            Error Name
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isRequired width={vw * 0.45}>
                        <FormControl.Label
                            _text={{
                                bold: true,
                            }}
                        >
                            To
                        </FormControl.Label>
                        <Button
                            bgColor={colors.primary[300]}
                            onPress={() => setShowDatePicker(true)}
                        >
                            {formData.endDate
                                ? `${formData.endDate.getDate()}/${formData.endDate.getMonth()}/${formData.endDate.getFullYear()}`
                                : "Select Date"}
                        </Button>
                        {showDatePicker && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={new Date()}
                                mode="date"
                                is24Hour={true}
                                onChange={(e, value) => {
                                    setShowDatePicker(false);
                                    if (value) {
                                        setData({
                                            ...formData,
                                            endDate: value,
                                        });
                                    }
                                }}
                            />
                        )}

                        <FormControl.ErrorMessage
                            _text={{
                                fontSize: "xs",
                            }}
                        >
                            Error Name
                        </FormControl.ErrorMessage>
                    </FormControl>
                </Row>
                <FormControl isRequired width={vw * 0.94}>
                    <FormControl.Label
                        _text={{
                            bold: true,
                        }}
                    >
                        Price
                    </FormControl.Label>
                    <Input
                        placeholder="John"
                        onChangeText={(value) =>
                            setData({ ...formData, title: value })
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
                    onPress={() => navigation.navigate("DRESSADDCOMPLETE")}
                >
                    Submit
                </Button>
            </VStack>
        </SafeAreaView>
    );
};

export default DressAdd;
