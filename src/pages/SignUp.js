import React from "react";
import { Text, StyleSheet } from "react-native";
import {
    Flex,
    Box,
    Button,
    FormControl,
    Input,
    Stack,
    Select,
    CheckIcon,
} from "native-base";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { WarningOutlineIcon } from "native-base";

const SignUp = () => {
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;

    return (
        <Box bg="black" height={windowHeight * 1.3}>
            <SafeAreaView>
                <Flex
                    bg="black"
                    height={windowHeight}
                    width={windowWidth}
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Box>
                        <Box alignItems="center">
                            <Text style={{ color: colors.primary[300] }}>
                                Please provide the following information
                            </Text>
                            <Box w="150%">
                                <FormControl isRequired>
                                    <Stack mx="4">
                                        <FormControl.Label>
                                            Name
                                        </FormControl.Label>
                                        <Input
                                            color="white"
                                            type="text"
                                            placeholder="John Doe.."
                                        />
                                        <FormControl.HelperText>
                                            Must be atleast 6 characters.
                                        </FormControl.HelperText>
                                        <FormControl.ErrorMessage
                                            leftIcon={
                                                <WarningOutlineIcon size="xs" />
                                            }
                                        >
                                            Atleast 6 characters are required.
                                        </FormControl.ErrorMessage>
                                    </Stack>
                                </FormControl>
                                <FormControl isRequired>
                                    <Stack mx="4">
                                        <FormControl.Label>
                                            Phone Number
                                        </FormControl.Label>
                                        <Input
                                            color="white"
                                            type="text"
                                            placeholder="+880 "
                                        />
                                        <FormControl.HelperText>
                                            Must be atleast 6 characters.
                                        </FormControl.HelperText>
                                        <FormControl.ErrorMessage
                                            leftIcon={
                                                <WarningOutlineIcon size="xs" />
                                            }
                                        >
                                            Atleast 6 characters are required.
                                        </FormControl.ErrorMessage>
                                    </Stack>
                                </FormControl>
                                <FormControl isRequired>
                                    <Stack mx="4">
                                        <FormControl.Label>
                                            Password
                                        </FormControl.Label>
                                        <Input
                                            color="white"
                                            type="password"
                                            placeholder="Your password here"
                                        />
                                        <FormControl.HelperText>
                                            Must be atleast 6 characters.
                                        </FormControl.HelperText>
                                        <FormControl.ErrorMessage
                                            leftIcon={
                                                <WarningOutlineIcon size="xs" />
                                            }
                                        >
                                            Atleast 6 characters are required.
                                        </FormControl.ErrorMessage>
                                    </Stack>
                                </FormControl>
                                <FormControl isRequired>
                                    <Stack mx="4">
                                        <FormControl.Label>
                                            Confirm Password
                                        </FormControl.Label>
                                        <Input
                                            color="white"
                                            type="password"
                                            placeholder="Your password here again"
                                        />
                                        <FormControl.HelperText>
                                            Must be atleast 6 characters.
                                        </FormControl.HelperText>
                                        <FormControl.ErrorMessage
                                            leftIcon={
                                                <WarningOutlineIcon size="xs" />
                                            }
                                        >
                                            Atleast 6 characters are required.
                                        </FormControl.ErrorMessage>
                                    </Stack>
                                </FormControl>
                                <FormControl isRequired>
                                    <Stack mx="4">
                                        <FormControl.Label>
                                            NID No.
                                        </FormControl.Label>
                                        <Input
                                            color="white"
                                            type="text"
                                            placeholder="Your NID number here"
                                        />
                                        <FormControl.HelperText>
                                            Must be atleast 6 characters.
                                        </FormControl.HelperText>
                                        <FormControl.ErrorMessage
                                            leftIcon={
                                                <WarningOutlineIcon size="xs" />
                                            }
                                        >
                                            Atleast 6 characters are required.
                                        </FormControl.ErrorMessage>
                                    </Stack>
                                </FormControl>
                                <Button
                                    mt={5}
                                    bgColor="primary.300"
                                    padding={5}
                                >
                                    <Text>Sign Up</Text>
                                </Button>
                            </Box>
                        </Box>
                    </Box>

                    <Text
                        style={{
                            ...styles.innerText,
                            fontWeight: "normal",
                            fontSize: 14,
                            marginTop: "auto",
                        }}
                    >
                        Copyright © 2022 | Nearwear
                    </Text>
                </Flex>
            </SafeAreaView>
        </Box>
    );
};

const styles = StyleSheet.create({
    innerText: {
        color: colors.primary[300],
        textAlign: "center",
        fontSize: 35,
        fontWeight: "bold",
    },
    primaryText: {
        color: colors.primary[300],
    },
    icon: {
        textAlign: "center",
        fontSize: 40,
    },
});

export default SignUp;
