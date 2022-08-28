import React from 'react'
import Card from './Card'
import { ScrollView, Flex } from 'native-base';

const CardList = () => {
    const cards = [1, 2, 3, 4];

    return (
        <ScrollView>
            <Flex direction='row' flexWrap="wrap" justifyContent="space-between">
                {cards.map(card => <Card />)}
            </Flex>
        </ScrollView>
    )
}

export default CardList