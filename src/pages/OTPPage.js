import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import OTPInput from "react-native-otp-forminput";
import { Text } from "native-base";
import useAxios from "axios-hooks";
import { env } from "../../env";
import { useDispatch } from "react-redux";
import { signIn } from "../actions/user";

const OTPPage = ({ route, navigation }) => {
    const [{ data, error }, refetch] = useAxios();
    const [routed, setRouted] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        if (data && data.token && !error && !routed) {
            refetch({
                method: "GET",
                url: env.BASE_URL + "/user",
                headers: {
                    Authorization: `Bearer ${route.params.token}`,
                },
                params: {
                    phone: data.phone,
                },
            });
        } else if (data && data.role && !error && !routed) {
            dispatch(
                signIn({
                    phone: data._id,
                    token: route.params.token,
                    otpVerified: true,
                    type: data.role,
                })
            );
            setRouted(true);
            navigation.navigate("TABS", {
                screen: "HomeTab",
                params: { screen: "DASHBOARD", params: { type: data.role } },
            });
        }
    }, [data, error]);

    return (
        <>
            <OTPInput
                titleStyle={{ color: "white" }}
                inputStyle={{ color: "white" }}
                title="Enter OTP"
                type="outline"
                onFilledCode={(code) => {
                    if (!routed) {
                        refetch({
                            method: "POST",
                            url: env.BASE_URL + "/verify",
                            data: {
                                otp: code,
                            },
                            headers: {
                                Authorization: `Bearer ${route.params.token}`,
                            },
                        });
                    }
                }}
            />
            <Text>Invalid OTP</Text>
        </>
    );
};

export default OTPPage;
