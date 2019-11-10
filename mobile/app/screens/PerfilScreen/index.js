import React from 'react'
import { View } from 'react-native'
import style from './style'
import Header from '../../components/MaterialHeader'
import InfoField from '../../components/InfoField'
import LogoutField from '../../components/LogoutField'
import PerfilPhotoContainer from '../../components/PerfilPhotoContainer'

export default function() {
    return (
        <View style={style.container}>
            <Header />
            <PerfilPhotoContainer />
            <View style={style.containerField}>
                <InfoField textName='Nome' />
                <InfoField textName='E-mail' />
                <InfoField textName='Excluir conta' />
                <LogoutField />
            </View>
        </View>
    )
}
