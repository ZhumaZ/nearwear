import React, { useEffect, useState } from "react";
import SearchBar from "../components/Search";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Flex, Text, ScrollView, Button, Center } from "native-base";
import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import CardList from "../components/CardList";
import { colors } from "../theme";
import axios from "axios";
import { useSelector } from "react-redux";
import { env } from "../../env";

const SearchPage = ({ route, navigation }) => {
    const [dresses, setDresses] = useState([]);
    const user = useSelector((state) => state.user);
    // Rentor click handlers
    const handleProductPress = (value) => {
        console.log("got product click of ID: ", value);
        navigation.navigate("PRODUCTSINGLE", { id: value });
    };

    useEffect(() => {
        (async () => {
            const response = await axios.get(`${env.BASE_URL}/dresses`, {
                headers: {
                    Authorization: "Bearer " + user.token,
                },
            });

            if (response.status === 200) {
                setDresses(response.data);
            }
        })();
    }, []);

    return (
        <ScrollView>
            <SafeAreaView>
                <Box p={3}>
                    <Box>
                        <SearchBar />
                        <TouchableOpacity>
                            <Flex my={3} direction="row" alignItems="center">
                                <FontAwesome5 name="filter" color="black" />
                                <Text fontWeight="bold"> Filter</Text>
                            </Flex>
                        </TouchableOpacity>
                        <CardList data={dresses} onPress={handleProductPress} />
                    </Box>
                </Box>
            </SafeAreaView>
        </ScrollView>
    );
};

export default SearchPage;
