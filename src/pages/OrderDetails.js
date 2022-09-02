import React from "react";
import { VStack, FormControl, Input } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

const OrderDetailsPage = () => {
    const [formData, setData] = React.useState({});
    return (
        <SafeAreaView>
            <VStack width="90%" mx="3" maxW="300px">
                <FormControl isRequired>
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
                <FormControl isRequired>
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
        </SafeAreaView>
    );
};

export default OrderDetailsPage;
