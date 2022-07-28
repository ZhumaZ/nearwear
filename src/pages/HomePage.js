import React from "react";
import { Text, StyleSheet } from "react-native";
import { Flex, Box, Button } from "native-base";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme";
import { Entypo } from "@expo/vector-icons";

const HomePage = () => {
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;

    return (
        <Box bg="black" height={windowHeight * 1.3}>
            <SafeAreaView>
                <Flex
                    bg="black"
                    height={windowHeight}
                    width={windowWidth}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Text
                        style={{
                            ...styles.innerText,
                            marginTop: windowHeight * 0.2,
                        }}
                    >
                        NearWear
                    </Text>
                    <Box>
                        <Entypo
                            style={{ ...styles.primaryText, ...styles.icon }}
                            name="location-pin"
                            size={24}
                            color="black"
                        />
                        <Text
                            style={{
                                ...styles.innerText,
                                fontSize: 25,
                                fontWeight: "normal",
                            }}
                        >
                            Your wardrobe is now digital
                        </Text>
                    </Box>
                    <Button
                        style={{ ...styles.btn }}
                        bgColor="primary.300"
                        padding={5}
                    >
                        Get Started
                    </Button>
                    <Text
                        style={{
                            ...styles.innerText,
                            fontWeight: "normal",
                            fontSize: 14,
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
    baseText: {
        fontWeight: "bold",
    },
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
        fontSize: 100,
    },
    btn: {
        width: "80%",
    },
});

export default HomePage;
