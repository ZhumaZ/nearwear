import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import OTPInput from "react-native-otp-forminput";
import { Text } from "native-base";
import useAxios from "axios-hooks";
import { env } from "../../env";
import { useDispatch } from "react-redux";
import { signIn } from "../actions/user";

const OTPPage = ({ route, navigation }) => {
    const [{ data, error }, refetch] = useAxios();
    const [{ userData, userError }, refetchUser] = useAxios();

    useEffect(() => {
        if (data && !error) {
            refetchUser({
                method: "GET",
                url: env.BASE_URL + `/user?phone=${data.phone}`,
                headers: {
                    Authorization: `Bearer ${route.params.token}`,
                },
            });
        }
    }, [data, error]);
    console.log(data);
    useEffect(() => {
        if (userData && !userError) {
            navigation.navigate("TABS", {
                screen: "DASHBOARD",
                params: { type: userData.role },
            });
        }
    }, [userData, userError]);
    console.log(userData, userError);
    return (
        <>
            <OTPInput
                titleStyle={{ color: "white" }}
                inputStyle={{ color: "white" }}
                title="Enter OTP"
                type="outline"
                onFilledCode={(code) => {
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
                }}
            />
            <Text>Invalid OTP</Text>
        </>
    );
};

export default OTPPage;
