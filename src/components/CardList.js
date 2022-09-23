import React from "react";
import Card from "./Card";
import { Flex } from "native-base";

const CardList = (props) => {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <Flex direction="row" flexWrap="wrap" justifyContent="space-between">
            {cards.map((card) => (
                <Card onPress={props.onPress} id={card} key={card} />
            ))}
        </Flex>
    );
};

export default CardList;
