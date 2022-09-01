import React from "react";
import {
    Text,
    Link,
    HStack,
    Center,
    Heading,
    Switch,
    useColorMode,
    NativeBaseProvider,
    extendTheme,
    VStack,
    Box,
    View,
} from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import HomePage from "./src/pages/HomePage";
import AuthPage from "./src/pages/AuthPage";
import SignUp from "./src/pages/SignUp";
import OTPPage from "./src/pages/OTPPage";
import RegistrationSuccess from "./src/pages/SignUpSuccess";
import DashboardPage from "./src/pages/Dashboard";
import ProductSingle from "./src/pages/ProductSingle";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Define the config
const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
    return (
        <NativeBaseProvider theme={theme}>
            <View style={{ flex: 1, backgroundColor: "#000000" }}>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                        }}
                    >
                        {/* <Stack.Screen name="Home" component={HomePage} />
                        <Stack.Screen name="Auth" component={AuthPage} />
                        <Stack.Screen name="SignUp" component={SignUp} /> */}
                        {/* <Stack.Screen name="OTP" component={OTPPage} /> */}
                        {/* <Stack.Screen name="REGISTRATION_SUCCESS" component={RegistrationSuccess}/> */}
                        {/* <Stack.Screen name="DASHBOARD" component={DashboardPage} /> */}
                        <Stack.Screen
                            name="PRODUCTSINGLE"
                            component={ProductSingle}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </NativeBaseProvider>
    );
}

// Color Switch Component
function ToggleDarkMode() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <HStack space={2} alignItems="center">
            <Text>Dark</Text>
            <Switch
                isChecked={colorMode === "light"}
                onToggle={toggleColorMode}
                aria-label={
                    colorMode === "light"
                        ? "switch to dark mode"
                        : "switch to light mode"
                }
            />
            <Text>Light</Text>
        </HStack>
    );
}
