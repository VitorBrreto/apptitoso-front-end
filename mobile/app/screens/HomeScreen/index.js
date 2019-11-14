import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/MaterialHeader'
import HomeBody from '../../components/HomeBody'
import { getCulinaryConceptList } from '../../util/api'

const homeData = [
    {
        title: 'Comida mineira',
        data: [
            [
                {
                    key: 5,
                    name: 'Bão de queijo',
                    image: require('../../assets/queijo.jpg'),
                },
                {
                    key: 9,
                    name: 'Queijo com goiabada',
                    image: require('../../assets/goiaba.jpg'),
                },
                {
                    key: 7,
                    name: 'Tropeiro',
                    image: require('../../assets/tropeiro.jpg'),
                },
            ],
        ],
    },
    {
        title: 'Simples de fazer',
        data: [
            [
                {
                    key: 4,
                    name: 'Arroz e feijão',
                    image: require('../../assets/arroz.jpg'),
                },
                {
                    key: 6,
                    name: 'Macarronada',
                    image: require('../../assets/macarrao.jpg'),
                },
                {
                    key: 8,
                    name: 'Saladinha light',
                    image: require('../../assets/salada.jpg'),
                },
            ],
        ],
    },
]

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <HomeBody data={homeData} />
        </View>
    )
}

export default HomeScreen
