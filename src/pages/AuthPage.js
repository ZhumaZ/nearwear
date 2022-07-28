import React from "react";
import { Text, StyleSheet } from "react-native";
import { Flex, Box, Button, FormControl, Input, Stack } from "native-base";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { WarningOutlineIcon } from "native-base";

const AuthPage = () => {
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
                    <Text
                        style={{
                            ...styles.innerText,
                            marginTop: windowHeight * 0.1,
                        }}
                    >
                        NearWear
                    </Text>
                    <Box>
                        <Flex justify="center" flexDirection="row" my={10}>
                            <Box
                                mx={2}
                                height={45}
                                width={60}
                                bgColor="#4285F4"
                            >
                                <AntDesign
                                    style={styles.icon}
                                    name="google"
                                    size={24}
                                    color="white"
                                />
                            </Box>
                            <Box
                                mx={2}
                                height={45}
                                width={60}
                                bgColor="#4267B2"
                            >
                                <FontAwesome
                                    style={styles.icon}
                                    name="facebook-f"
                                    size={24}
                                    color="white"
                                />
                            </Box>

                            <Box
                                mx={2}
                                height={45}
                                width={60}
                                bgColor="#00acee"
                            >
                                <AntDesign
                                    style={styles.icon}
                                    name="twitter"
                                    size={24}
                                    color="white"
                                />
                            </Box>
                        </Flex>
                        <Box alignItems="center">
                            <Box w="150%">
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
                                <Button
                                    mt={5}
                                    bgColor="primary.300"
                                    padding={5}
                                >
                                    <Text>Login</Text>
                                </Button>
                                <Button
                                    bgColor="black"
                                    width="40%"
                                    marginLeft="auto"
                                >
                                    <Text style={{ color: "#12B422" }}>
                                        Forgot Password
                                    </Text>
                                </Button>
                            </Box>
                            <Text style={{ color: "white" }}>Or</Text>
                        </Box>
                    </Box>

                    <Button
                        mt={3}
                        width="88%"
                        bgColor="primary.300"
                        padding={5}
                    >
                        <Text>Get Started</Text>
                    </Button>
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

export default AuthPage;
