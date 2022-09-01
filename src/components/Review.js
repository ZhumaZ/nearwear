import React from "react";
import { Box, Avatar, Text, Flex, Spacer } from "native-base";
import { AirbnbRating } from "react-native-ratings";
import { colors } from "../theme";
const Review = () => {
    return (
        <Box
            borderColor={colors.primary[300]}
            borderWidth={1}
            p={3}
            borderRadius={5}
        >
            <Flex direction="row" justifyContent="space-between">
                <Flex direction="row">
                    <Avatar
                        bg="amber.500"
                        borderColor={colors.primary[300]}
                        borderWidth={2}
                        source={{
                            uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                        }}
                    >
                        TS
                    </Avatar>
                    <Spacer size={1} />
                    <Flex justifyContent="flex-start" alignItems="flex-start">
                        <Text color="black" fontWeight="bold" fontSize={16}>
                            Tania Aktar
                        </Text>
                        <AirbnbRating size={10} showRating={false} />
                    </Flex>
                </Flex>
                <Text color="black">12/12/2012</Text>
            </Flex>
            <Spacer size={2} />
            <Text color="black" textAlign="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque viverra ornare eleifend. Nam eget consectetur
                ipsum. Nam eu urna rutrum, ullamcorper urna ut, aliquet nisi.
                Morbi sagittis, tellus vitae varius tristique, arcu metus
                vestibulum arcu, sed hendrerit massa nunc at metus.
            </Text>
        </Box>
    );
};

export default Review;
