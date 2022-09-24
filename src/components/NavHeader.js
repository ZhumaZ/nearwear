import { Text } from "native-base";
export const NavHeader = (props) => {
    return (
        <Text fontWeight="bold" fontSize="16" color="white">
            {props.children}
        </Text>
    );
};
