import React, { useEffect, useState } from "react";
import { Box, ScrollView, Text, Spacer, Button, Icon } from "native-base";
import ProductSingleCard from "../components/ProductSingleCard";
import ReviewList from "../components/ReviewList";
import { useDimensions } from "../utils";
import { colors } from "../theme";
import { MaterialIcons } from "@expo/vector-icons";
import { NavHeader } from "../components/NavHeader";
import axios from "axios";
import { env } from "../../env";
import { useSelector } from "react-redux";

const ProductSingle = ({ route, navigation }) => {
    const [vh, vw] = useDimensions();
    const [dress, setDress] = useState(null);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        (async () => {
            const response = await axios.get(`${env.BASE_URL}/dress`, {
                params: {
                    _id: route.params.id,
                },
                headers: {
                    Authorization: "Bearer " + user.token,
                },
            });

            if (response.status === 200) {
                setDress(response.data);
            }
        })();
    }, []);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: (props) => (
                <NavHeader
                    {...props}
                    children={dress ? dress.title : "Loading..."}
                />
            ),
        });
    }, [dress, route, navigation]);

    console.log(dress);
    return (
        <Box>
            <ScrollView>
                <ProductSingleCard
                    title={
                        user.type === "rentor"
                            ? dress?.title + ` (${dress?.time} days)`
                            : dress?.title + ` (${dress?.price} TK)`
                    }
                    image={dress?.image}
                />
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

            {user.type === "rentor" ? (
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
                            params: {
                                id: route.params.id,
                                dress: dress,
                            },
                        })
                    }
                >
                    Buy Now | 500 TK
                </Button>
            ) : user.type === "provider" ? (
                <Button
                    bgColor={colors.primary[300]}
                    position="absolute"
                    top={vh * 0.7}
                    width={vw * 0.941}
                    p={3}
                    m={3}
                    onPress={() => {}}
                >
                    Edit
                </Button>
            ) : null}
        </Box>
    );
};

export default ProductSingle;
