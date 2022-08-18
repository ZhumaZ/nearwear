import React from "react";
import OTPInput from "react-native-otp-forminput";
const OTPPage = () => {
    return (
        <OTPInput
            title="Enter OTP"
            type="outline"
            onFilledCode={(code) => {
                console.log(code);
            }}
        />
    );
};

export default OTPPage;
