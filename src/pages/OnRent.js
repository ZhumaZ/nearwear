import React, { useState, useEffect } from "react";
import { Box, Progress, Flex, ScrollView, Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";
import { useDimensions } from "../utils";
import { colors } from "../theme";
import axios from "axios";
import { env } from "../../env";
import { useSelector } from "react-redux";

const OnRent = () => {
    const [dresses, setDresses] = useState([]);
    const [vw, vh] = useDimensions();
    const user = useSelector((state) => state.user);
    useEffect(() => {
        (async () => {
            const response = await axios.get(`${env.BASE_URL}/dresses`, {
                headers: {
                    Authorization: "Bearer " + user.token,
                },
            });

            if (response.status === 200) {
                setDresses(
                    response.data.filter((dress) => dress.status === "rent")
                );
            }
        })();
    }, []);
    const days = Math.round(Math.random() * 7);
    const renderOnRent = () => {
        return dresses.map((dress) => (
            <Flex direction="row" justifyContent="center" alignItems="center">
                <Card
                    height={vh * 0.35}
                    he
                    height2={20}
                    onPress={() => {}}
                    id={dress._id}
                    key={dress._id}
                    image={dress.image}
                    title={dress.title}
                    price={dress.price}
                />
                <Box flex={1} ml={3}>
                    <Text textAlign="center" fontWeight="bold">
                        {dress.price} TK
                    </Text>
                    <Progress
                        _filledTrack={{
                            bg: colors.primary[300],
                        }}
                        mt={2}
                        min={0}
                        max={7}
                        value={days}
                    />
                    <Text textAlign="center">{days} of 7 days</Text>
                </Box>
            </Flex>
        ));
    };

    return (
        <ScrollView>
            <SafeAreaView>
                {dresses.length ? (
                    <Box p={3}>{renderOnRent()}</Box>
                ) : (
                    <Box p={3}>
                        <Text>No dress found on rent</Text>
                    </Box>
                )}
            </SafeAreaView>
        </ScrollView>
    );
};

export default OnRent;
