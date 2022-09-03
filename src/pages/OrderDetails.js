import React from "react";
import {
    VStack,
    FormControl,
    Input,
    Button,
    Row,
    TextArea,
    ScrollView,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useDimensions } from "../utils";
import { colors } from "../theme";

const OrderDetailsPage = () => {
    const [formData, setData] = React.useState({});
    const [showDatePicker, setShowDatePicker] = React.useState(false);
    const [vh, vw] = useDimensions();
    return (
        <SafeAreaView>
            <ScrollView>
                <VStack width="90%" mx="3" maxW="300px">
                    <FormControl isRequired width={vw * 0.94}>
                        <FormControl.Label
                            _text={{
                                bold: true,
                            }}
                        >
                            Full Name
                        </FormControl.Label>
                        <Input
                            placeholder="John"
                            onChangeText={(value) =>
                                setData({ ...formData, name: value })
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
                            Email Address
                        </FormControl.Label>
                        <Input
                            type="email"
                            placeholder="John"
                            onChangeText={(value) =>
                                setData({ ...formData, email: value })
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
                            Phone
                        </FormControl.Label>
                        <Input
                            placeholder="John"
                            onChangeText={(value) =>
                                setData({ ...formData, phone: value })
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
                            Delivery Address
                        </FormControl.Label>
                        <TextArea
                            placeholder="John"
                            onChangeText={(value) =>
                                setData({ ...formData, name: value })
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
                </VStack>
            </ScrollView>
            <Button
                bgColor={colors.primary[300]}
                position="absolute"
                width={vw * 0.94}
                mx={3}
                top={vh * 0.8}
            >
                Proceed
            </Button>
        </SafeAreaView>
    );
};

export default OrderDetailsPage;
