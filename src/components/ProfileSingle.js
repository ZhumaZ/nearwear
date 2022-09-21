import { Box, Flex, Avatar, Text, Button } from "native-base";
import React from "react";
import { colors } from "../theme";
colors;
const ProfileSingle = () => {
    return (
        <Flex
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            borderWidth={1}
            borderColor={colors.primary[300]}
            borderRadius={5}
            p={1}
            mb={1}
        >
            <Avatar
                bg="amber.500"
                borderColor={colors.primary[300]}
                borderWidth={2}
                source={{
                    uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                }}
                size={16}
            ></Avatar>
            <Box flex={1} ml={3}>
                <Text fontWeight="bold" fontSize={18}>
                    Tania Aktar
                </Text>
                <Text>Provider</Text>
                <Text fontSize={10}>Since Jan. 2022</Text>
            </Box>
            <Button bgColor={colors.primary[300]}>Manage</Button>
        </Flex>
    );
};

export default ProfileSingle;
