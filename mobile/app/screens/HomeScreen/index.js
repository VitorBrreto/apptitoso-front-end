import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/MaterialHeader'
import HomeBody from '../../components/HomeBody'
import { getCulinaryConceptList } from '../../util/api'

const homeData = [
    {
        title: 'aaaa',
        data: [
            [
                { key: 5, name: 'bla ' },
                { key: 9, name: 'ble ' },
                { key: 7, name: 'bli ' },
            ],
        ],
    },
]

const HomeScreen = props => {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <HomeBody style={{ flex: 1 }} data={homeData} />
        </View>
    )
}

export default HomeScreen
