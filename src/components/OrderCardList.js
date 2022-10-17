import { Box } from "native-base";
import React from "react";
import OrderCard from "./OrderCard";

const OrderCardList = (props) => {
    return (
        <Box>
            {props?.data?.map((item) => (
                <OrderCard
                    onPress={props.onPress}
                    onSendMessage={props.onSendMessage}
                    onManage={props.onManage}
                    key={item._id}
                    id={item._id}
                    {...item}
                />
            ))}
        </Box>
    );
};

export default OrderCardList;
