import React from 'react';
import { Box, Text, Button } from 'native-base';
const RegistrationSuccess = ({route, navigation}) => {
    return (
        <Box>
            <Text>You've successfully registered! Thanks for registration</Text>
            <Button onPress={(e) => navigation.navigate("Auth", {newlyRegistered: true})}>
                Login
            </Button>
        </Box>
    )
}

export default RegistrationSuccess