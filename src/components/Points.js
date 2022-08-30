import React from "react";
import { Box, Text } from "native-base";
import { colors } from "../theme";
const Points = () => {
    return (
        <Box>
            <Text
                fontSize="4xl"
                fontWeight="bold"
                mt={-3}
                color={colors.primary[300]}
            >
                670
            </Text>
            <Text color="black" mt={-3}>
                NW Points
            </Text>
        </Box>
    );
};

export default Points;
