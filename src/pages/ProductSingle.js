import React from "react";
import { Box, ScrollView, Text, Spacer, Button, Icon } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductSingleCard from "../components/ProductSingleCard";
import ReviewList from "../components/ReviewList";
import { useDimensions } from "../utils";
import { colors } from "../theme";
import { MaterialIcons } from "@expo/vector-icons";

const ProductSingle = () => {
    const [vh, vw] = useDimensions();

    return (
        <SafeAreaView>
            <ScrollView>
                <ProductSingleCard />
                <Box p={3}>
                    <Text color="black" textAlign="justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque viverra ornare eleifend. Nam eget
                        consectetur ipsum. Nam eu urna rutrum, ullamcorper urna
                        ut, aliquet nisi. Morbi sagittis, tellus vitae varius
                        tristique, arcu metus vestibulum arcu, sed hendrerit
                        massa nunc at metus.
                    </Text>
                    <Spacer size={2} />
                    <Text color="black" fontWeight="bold" fontSize={18}>
                        Reviews
                    </Text>
                    <Spacer size={2} />
                    <ReviewList />
                </Box>
            </ScrollView>
            <Button
                leftIcon={
                    <Icon
                        as={MaterialIcons}
                        name="add-shopping-cart"
                        size="sm"
                    />
                }
                bgColor={colors.primary[300]}
                position="absolute"
                top={vh * 0.9}
                width={vw * 0.941}
                p={3}
                m={3}
            >
                Buy Now | 500 TK
            </Button>
        </SafeAreaView>
    );
};

export default ProductSingle;
