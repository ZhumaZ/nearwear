import React from "react";
import { Box, ScrollView, Text, Spacer, Button, Icon } from "native-base";
import ProductSingleCard from "../components/ProductSingleCard";
import ReviewList from "../components/ReviewList";
import { useDimensions } from "../utils";
import { colors } from "../theme";
import { MaterialIcons } from "@expo/vector-icons";
import { NavHeader } from "../components/NavHeader";

const ProductSingle = ({ route, navigation }) => {
    const [vh, vw] = useDimensions();
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: (props) => (
                <NavHeader
                    {...props}
                    children={"Silk Sharee " + route.params.id}
                />
            ),
        });
    }, [route, navigation]);
    return (
        <Box>
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
                top={vh * 0.7}
                width={vw * 0.941}
                p={3}
                m={3}
                onPress={() =>
                    navigation.navigate("OrderTab", {
                        screen: "ORDERDETAILS",
                        params: { id: route.params.id },
                    })
                }
            >
                Buy Now | 500 TK
            </Button>
        </Box>
    );
};

export default ProductSingle;
