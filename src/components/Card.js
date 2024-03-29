import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Text, Box, Image, Flex } from "native-base";
import { AirbnbRating } from "react-native-ratings";
import { colors } from "../theme";
import { useDimensions } from "../utils";
const Card = (props) => {
    const [vw, vh] = useDimensions();
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
                            uri: props.image,
                        }}
                        alt="Sharee"
                        width="full"
                        height="full"
                        borderTopLeftRadius={5}
                        borderTopRightRadius={5}
                    />
                </Box>

                
                    <Text ml={2} color={colors.primary[300]}>{props.title}</Text>
                    <Box mt={1} ml={- vw * 0.12}>
                        <AirbnbRating size={10} showRating={false} />
                    </Box>
              
                <Text color={colors.primary[300]} px={2}>
                    {props.price} TK
                </Text>
            </Pressable>
        </Box>
    );
};

export default Card;
