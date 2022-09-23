import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Text, Box, Image, Flex } from "native-base";
import { AirbnbRating } from "react-native-ratings";
import { colors } from "../theme";
const Card = (props) => {
    const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating);
    };

    return (
        <Box
            width="49%"
            height="200px"
            borderWidth={1}
            borderColor={colors.primary[300]}
            borderRadius={5}
            mb={2.5}
            {...props}
        >
            <Pressable onPress={() => props.onPress(props.id)}>
                <Box
                    width="full"
                    height={props.height2 ? props.height2 : "2/3"}
                    borderTopLeftRadius={5}
                    borderTopRightRadius={5}
                >
                    <Image
                        source={{
                            uri: "https://i.ibb.co/jMhzGZB/sharee.jpg",
                        }}
                        alt="Sharee"
                        width="full"
                        height="full"
                        borderTopLeftRadius={5}
                        borderTopRightRadius={5}
                    />
                </Box>

                <Flex direction="row" p={2} justifyContent="space-between">
                    <Text color={colors.primary[300]}>Silk Sharee</Text>
                    <Box mt={1} ml={3}>
                        <AirbnbRating size={10} showRating={false} />
                    </Box>
                </Flex>
                <Text color={colors.primary[300]} px={2}>
                    500 TK
                </Text>
            </Pressable>
        </Box>
    );
};

export default Card;
