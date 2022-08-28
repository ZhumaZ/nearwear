import React from 'react'
import {Text, Box, Heading} from 'native-base'
import CardList from '../components/CardList';
import { SafeAreaView } from "react-native-safe-area-context";

const DashboardPage = () => {
    return (
        <SafeAreaView >
            <Box p={3}>
            <Box my={2} mt={10}>
            <Heading color="black">Let's build your</Heading>
            <Heading color="black">dream wardrobe</Heading>
            </Box>
            
            <CardList/>

            </Box>
        </SafeAreaView>
    )
}

export default DashboardPage;