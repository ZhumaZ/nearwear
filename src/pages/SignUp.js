import React, {useState, useEffect} from "react";
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
import useAxios from "axios-hooks";
import { env } from "../../env";

const SignUp = ({route, navigation}) => {
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;

    const [formData, setFormData] = useState({})
    const [passMatch, setPassMatch] = useState(null)

    const [{ data, error }, refetch] = useAxios();

    useEffect(() => {
        if(data && !error) {
            navigation.navigate("REGISTRATION_SUCCESS", {signUpAs: route.params?.signUpAs})
        }
    }, [data, error])

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
                                            onChangeText={(value) => setFormData({...formData, name: value})}
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
                                            onChangeText={(value) => setFormData({...formData, phone: value})}
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
                                <FormControl isRequired isInvalid={passMatch === false}>
                                    <Stack mx="4">
                                        <FormControl.Label>
                                            Password
                                        </FormControl.Label>
                                        <Input
                                            color="white"
                                            type="password"
                                            placeholder="Your password here"
                                            onChangeText={(value) => setFormData({...formData, password: value})}
                                        />
                                    </Stack>
                                </FormControl>
                                <FormControl isRequired isInvalid={passMatch === false}>
                                    <Stack mx="4">
                                        <FormControl.Label>
                                            Confirm Password
                                        </FormControl.Label>
                                        <Input
                                            color="white"
                                            type="password"
                                            placeholder="Your password here again"
                                            onChangeText={(value) => setFormData({...formData, cpassword: value})}
                                        />
                                        <FormControl.ErrorMessage
                                            leftIcon={
                                                <WarningOutlineIcon size="xs" />
                                            }
                                        >
                                            Please provide the same password twice
                                        </FormControl.ErrorMessage>
                                    </Stack>
                                </FormControl>
                                <FormControl>
                                    <Stack mx="4">
                                        <FormControl.Label>
                                            NID No.
                                        </FormControl.Label>
                                        <Input
                                            color="white"
                                            type="text"
                                            placeholder="Your NID number here"
                                        />
                                    </Stack>
                                </FormControl>
                                <Button
                                    mt={5}
                                    bgColor="primary.300"
                                    padding={5}
                                    onPress={(e) => {
                                        if(formData.password === formData.cpassword) {
                                            setPassMatch(true)
                                            console.log(formData)
                                            refetch({
                                                method: "POST",
                                                url: env.BASE_URL + "/register",
                                                data: {...formData, role: route.params?.signUpAs}
                                            })
                                        } else {
                                            setPassMatch(false)
                                        }
                                    }}
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
