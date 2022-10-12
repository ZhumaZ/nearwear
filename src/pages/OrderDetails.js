import React from "react";
import {
    VStack,
    FormControl,
    Button,
    TextArea,
    ScrollView,
    Box,
} from "native-base";
import { useDimensions } from "../utils";
import { colors } from "../theme";

const OrderDetailsPage = ({ route, navigation }) => {
    const [formData, setData] = React.useState({});
    const [vh, vw] = useDimensions();
    return (
        <Box>
            <ScrollView minHeight={vh}>
                <VStack width="90%" mx="3" maxW="300px">
                    <FormControl isRequired width={vw * 0.94}>
                        <FormControl.Label
                            _text={{
                                bold: true,
                            }}
                        >
                            Delivery Address
                        </FormControl.Label>
                        <TextArea
                            placeholder="Full address please!"
                            onChangeText={(value) =>
                                setData({ ...formData, address: value })
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
                zIndex={100}
                bgColor={colors.primary[300]}
                position="absolute"
                width={vw * 0.94}
                p={3}
                m={3}
                top={vh * 0.7}
                onPress={() =>
                    navigation.navigate("ORDERSUMMARY", {
                        data: formData,
                        dress: route.params.dress,
                    })
                }
            >
                Proceed
            </Button>
        </Box>
    );
};

export default OrderDetailsPage;
