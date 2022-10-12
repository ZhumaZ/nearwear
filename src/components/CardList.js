import React from "react";
import Card from "./Card";
import { Flex } from "native-base";

const CardList = (props) => {
    return (
        <Flex direction="row" flexWrap="wrap" justifyContent="space-between">
            {props.data?.map((card) => (
                <Card
                    onPress={props.onPress}
                    id={card._id}
                    key={card._id}
                    image={card.image}
                    title={card.title}
                    price={card.price}
                />
            ))}
        </Flex>
    );
};

export default CardList;
