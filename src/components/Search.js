import React from "react";
import { VStack, Icon, Input, Heading } from "native-base";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../theme";
const SearchBar = () => {
    return (
        <VStack w="100%" space={5} alignSelf="center">
            <Input
                _input={{ color: "white" }}
                bgColor={colors.primary[300]}
                placeholder="Search Dresses"
                width="100%"
                borderRadius="4"
                borderColor={colors.primary[300]}
                placeholderTextColor="white"
                py="0"
                px="5"
                fontSize="14"
                InputRightElement={
                    <Icon
                        m="2"
                        ml="3"
                        mr="3"
                        size="6"
                        color="white"
                        as={<MaterialIcons name="search" />}
                    />
                }
             
            />
        </VStack>
    );
};

const styles = StyleSheet.create({
    inputColor: {
        color: "white",
        padding: "10px",
    },
});

export default SearchBar;
