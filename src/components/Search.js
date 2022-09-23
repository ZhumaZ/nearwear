import React, { useState } from "react";
import { VStack, Icon, Input, Heading } from "native-base";
import { Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../theme";
const SearchBar = (props) => {
    const [value, setValue] = useState("");
    return (
        <VStack w="100%" space={5} alignSelf="center" {...props}>
            <Input
                value={value}
                onChangeText={(text) => setValue(text)}
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
                    <Pressable onPress={() => props.onPress(value)}>
                        <Icon
                            m="2"
                            ml="3"
                            mr="3"
                            size="6"
                            color="white"
                            as={<MaterialIcons name="search" />}
                        />
                    </Pressable>
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
