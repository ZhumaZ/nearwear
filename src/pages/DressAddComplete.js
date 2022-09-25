import React from "react";
import Congratulations from "../components/Congratulations";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Flex, Text, Spacer, Center, Button } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../theme";
import { useDimensions } from "../utils";
const DressAddComplete = ({ route, navigation }) => {
    const [vh, vw] = useDimensions();

    return (
        <SafeAreaView>
            <Flex mx={3} height="full" justifyContent="center">
                <Box>
                    <Congratulations
                        bgColor="gray.200"
                        py={10}
                        text="Your item has been submitted successfully"
                    />
                    <Flex direction="row" mt={5} width={vw * 0.94}>
                        <Entypo
                            name="info-with-circle"
                            size={20}
                            color={colors.primary[300]}
                        />

                        <Text ml={1} color="green.700">
                            Your item is successfully added and currently under
                            review we'll let you know the result soon. Thanks
                            for using NearWear
                        </Text>
                    </Flex>
                    <Button
                        bgColor={colors.primary[300]}
                        my={3}
                        onPress={() => navigation.navigate("SEARCH")}
                    >
                        My Dresses
                    </Button>
                </Box>
            </Flex>
        </SafeAreaView>
    );
};

export default DressAddComplete;
