import React from "react";
import { Box, Flex, Text, Button } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Congratulations from "../components/Congratulations";
import { useDimensions } from "../utils";
import { colors } from "../theme";
const RegistrationSuccess = ({ route, navigation }) => {
    const [vh, vw] = useDimensions();

    return (
        <Box bgColor="black">
            <SafeAreaView>
                <Flex mx={3} height="full" justifyContent="center">
                    <Box>
                        <Congratulations
                            bgColor="gray.900"
                            py={10}
                            text="Your Registration has been done successfully"
                        />
                    </Box>
                </Flex>
                <Button
                    bgColor={colors.primary[300]}
                    position="absolute"
                    width={vw * 0.94}
                    mx={3}
                    top={vh * 0.85}
                >
                    Login
                </Button>
            </SafeAreaView>
        </Box>
    );
};

export default RegistrationSuccess;
