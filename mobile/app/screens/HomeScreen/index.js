import React from 'react'
import { View } from 'react-native'
import Header from '../../components/MaterialHeader'
import HomeBody from '../../components/HomeBody'

const homeData = [
    {
        title: 'Mineiro',
        data: [
            [
                { key: 5, name: 'Bão de queijo' },
                { key: 9, name: 'Queijo com goiabada' },
                { key: 7, name: 'Tropeiro' },
            ],
        ],
    },
    {
        title: 'Simples',
        data: [
            [
                { key: 4, name: 'Arroz e feijão' },
                { key: 6, name: 'Macarronada' },
                { key: 8, name: 'Saladinha light' },
            ],
        ],
    },
]

const HomeScreen = props => {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <HomeBody data={homeData} />
        </View>
    )
}

export default HomeScreen
