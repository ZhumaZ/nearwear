import React from "react";
import { Box, Flex, Image } from "native-base";
import { colors } from "../theme";
import { AirbnbRating } from "react-native-ratings";
import { useDimensions } from "../utils";

const ProductSingleCard = (props) => {
    const [vh, vw] = useDimensions();

    return (
        <Box width="full" height={vh * 0.35}>
            <Flex
                width="full"
                height="full"
                alignItems="flex-end"
                justifyContent="space-between"
                direction="row"
            >
                <Box
                    bgColor={colors.primary[300]}
                    width="2/3"
                    p={2}
                    borderTopRightRadius={50}
                >
                    {props.title}
                </Box>
                <AirbnbRating size={10} showRating={false} />
            </Flex>

            <Image
                source={{
                    uri: props.image,
                }}
                alt="Sharee"
                width="full"
                height="full"
                borderTopLeftRadius={5}
                borderTopRightRadius={5}
                zIndex={-1}
                position="absolute"
            />
        </Box>
    );
};

export default ProductSingleCard;
