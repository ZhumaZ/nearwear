import { Box } from "native-base";
import React from "react";
import OrderCard from "./OrderCard";

const OrderCardList = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <Box>
            {data.map((item) => (
                <OrderCard key={item} />
            ))}
        </Box>
    );
};

export default OrderCardList;
