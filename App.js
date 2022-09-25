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
    Flex,
    Pressable,
    Button,
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
import OrderDetailsPage from "./src/pages/OrderDetails";
import OrderSummaryPage from "./src/pages/OrderSummary";
import OrderConfirmPage from "./src/pages/OrderConfirm";
import SearchPage from "./src/pages/SearchPage";
import DressAdd from "./src/pages/DressAdd";
import DressAddComplete from "./src/pages/DressAddComplete";
import OnRent from "./src/pages/OnRent";
import DressAll from "./src/pages/DressAll";
import DressSingle from "./src/pages/DressSingle";
import { Ionicons, Entypo, FontAwesome, AntDesign } from "@expo/vector-icons";
import { colors } from "./src/theme";
import HistoryPage from "./src/pages/History";
import AllUsers from "./src/pages/AllUsers";
import ManageUser from "./src/pages/ManageUser";
import { useDimensions } from "./src/utils";
import { NavHeader } from "./src/components/NavHeader";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: colors.primary[300],
                },
                headerTintColor: "#fff",
            }}
        >
            <Stack.Screen
                options={{ headerShown: false }}
                name="DASHBOARD"
                component={DashboardPage}
            />
            <Stack.Screen name="PRODUCTSINGLE" component={ProductSingle} />
        </Stack.Navigator>
    );
};

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let iconLib;
                    if (route.name === "HomeTab") {
                        iconName = "home";
                        iconLib = "ionicons";
                    } else if (route.name === "ChatTab") {
                        iconName = "chatbox-ellipses";
                        iconLib = "ionicons";
                    } else if (route.name === "OrderTab") {
                        iconName = "shopping-bag";
                        iconLib = "entypo";
                    } else if (route.name === "ProfileTab") {
                        iconName = "user";
                        iconLib = "fontAwesome";
                    }

                    // You can return any component that you like here!
                    if (iconLib === "ionicons") {
                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    } else if (iconLib === "entypo") {
                        return (
                            <Entypo name={iconName} size={size} color={color} />
                        );
                    } else {
                        return (
                            <FontAwesome
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    }
                },
                tabBarActiveTintColor: colors.primary[300],
                tabBarInactiveTintColor: "gray",
                headerShown: false,
            })}
        >
            <Tab.Screen
                options={{ title: "Home" }}
                name="HomeTab"
                component={HomeStack}
            />
            <Tab.Screen
                options={{ title: "Shop" }}
                name="OrderTab"
                component={OrderStack}
            />
            <Tab.Screen
                options={{ title: "Chat" }}
                name="ChatTab"
                component={ChatStack}
            />

            <Tab.Screen
                options={{ title: "Profile" }}
                name="ProfileTab"
                component={ProfileStack}
            />
        </Tab.Navigator>
    );
};

const ChatStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary[300],
                },
                headerTintColor: "#fff",
            }}
        >
            <Stack.Screen
                name="Messages"
                options={{ headerTitle: (props) => <NavHeader {...props} /> }}
                component={() => <></>}
            />
        </Stack.Navigator>
    );
};

const ProfileStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary[300],
                },
                headerTintColor: "#fff",
            }}
        >
            <Stack.Screen
                name="HISTORY"
                options={{ headerTitle: (props) => <NavHeader {...props} /> }}
                component={HistoryPage}
            />
        </Stack.Navigator>
    );
};

const OrderStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary[300],
                },
                headerTintColor: "#fff",
            }}
            initialRouteName="SEARCH"
        >
            {/* Rentor Screens STARTS */}
            <Stack.Screen
                options={{ headerShown: false }}
                name="SEARCH"
                component={SearchPage}
            />
            <Stack.Screen name="PRODUCTSINGLE" component={ProductSingle} />
            <Stack.Screen name="ORDERDETAILS" component={OrderDetailsPage} />
            <Stack.Screen name="ORDERSUMMARY" component={OrderSummaryPage} />
            <Stack.Screen name="ORDERCONFIRM" component={OrderConfirmPage} />
            {/* Rentor Screens ENDS */}

            {/* Provider Screens STARTS */}
            <Stack.Screen name="ONRENT" component={OnRent} />
            <Stack.Screen name="DRESSSINGLE" component={DressSingle} />
            <Stack.Screen name="DRESSADD" component={DressAdd} />
            <Stack.Screen
                name="DRESSADDCOMPLETE"
                component={DressAddComplete}
            />

            {/* Provider Screens ENDS */}

            {/* Admin Screens STARTS */}
            <Stack.Screen name="ALLUSERS" component={AllUsers} />
            <Stack.Screen name="MANAGEUSER" component={ManageUser} />
            {/* Admin Screens ENDS */}
        </Stack.Navigator>
    );
};

// Define the config
const config = {
    useSystemColorMode: false,
    initialColorMode: "light",
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
                        {/* Common Screens STARTS */}
                        <Stack.Screen name="Home" component={HomePage} />
                        <Stack.Screen name="Auth" component={AuthPage} />
                        <Stack.Screen name="SignUp" component={SignUp} />
                        <Stack.Screen name="OTP" component={OTPPage} />
                        <Stack.Screen
                            name="REGISTRATION_SUCCESS"
                            component={RegistrationSuccess}
                        />
                        <Stack.Screen name="TABS" component={Tabs} />
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
