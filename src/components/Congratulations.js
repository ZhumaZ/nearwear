import React from "react";
import { Box, Center, Heading } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../theme";
const Congratulations = ({ text, ...rest }) => {
    return (
        <Center {...rest}>
            <Box
                bgColor="green.700"
                display="flex"
                size={104}
                borderRadius={100}
                borderWidth={2}
                borderColor="green.700"
            >
                <AntDesign
                    name="checkcircle"
                    size={100}
                    color={colors.primary[200]}
                />
            </Box>
            <Heading mt={2} color={colors.primary[300]}>
                Congratulations
            </Heading>
            <Heading
                textAlign="center"
                color={colors.primary[300]}
                fontSize={20}
            >
                {text ? text : "Please put some text here"}
            </Heading>
        </Center>
    );
};

export default Congratulations;
