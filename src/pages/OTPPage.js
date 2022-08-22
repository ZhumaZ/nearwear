import React, {useEffect} from "react";
import OTPInput from "react-native-otp-forminput";
import {Text} from 'native-base'
import useAxios from "axios-hooks";
import { env } from "../../env";
const OTPPage = ({route, navigation}) => {
    const [{ data, error }, refetch] = useAxios();

    useEffect(() => {
        if(data && !error) {
            console.log('verified OTP successfully')
        }
    })

    return (
        <>
            <OTPInput
                title="Enter OTP"
                type="outline"
                onFilledCode={(code) => {
                    refetch({
                        method: "POST",
                        url: env.BASE_URL + "/verify",
                        data: {
                            otp: code
                        },
                        headers: {
                            'Authorization': `Bearer ${route.params.token}` 
                        }
                    })
                }}
                
            />
            {error && <Text>Invalid OTP</Text>}
        </>
    );
};

export default OTPPage;
