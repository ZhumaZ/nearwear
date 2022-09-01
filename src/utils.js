import { Dimensions } from "react-native";

export const useDimensions = () => {
    const vw = Dimensions.get("window").width;
    const vh = Dimensions.get("window").height;

    return [vh, vw];
};
