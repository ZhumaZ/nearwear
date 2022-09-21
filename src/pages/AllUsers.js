import React from "react";
import { Box, ScrollView } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileSingle from "../components/ProfileSingle";

const AllUsers = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <SafeAreaView>
            <ScrollView>
                <Box p={3}>
                    {data.map((item) => (
                        <ProfileSingle key={item} />
                    ))}
                </Box>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AllUsers;
