import React from "react";
import { Box, Text, Spacer } from "native-base";
import Review from "./Review";
const ReviewList = () => {
    const data = [1, 2, 3, 4, 5, 6];
    return (
        <Box>
            {data.map((item) => (
                <Box key={item}>
                    <Review />
                    <Spacer size={1} />
                </Box>
            ))}
        </Box>
    );
};

export default ReviewList;
