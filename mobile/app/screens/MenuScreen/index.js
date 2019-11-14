import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Header from '../../components/MaterialHeader'
import DefaultList from '../../components/DefaultList'

const MenuScreen = ({ navigation }) => {
    const items = [
        {
            key: '1',
            name: 'Perfil',
            onPress: () => {
                navigation.navigate('Login')
            },
        },
        {
            key: '2',
            name: 'Receitas postadas',
            onPress: () => {
                navigation.navigate('PostedRecipes')
            },
        },
        {
            key: '3',
            name: 'Conceitos culinários',
            onPress: () => {
                navigation.navigate('CulinaryConceptsList')
            },
        },
        {
            key: '4',
            name: 'Cadastrar nova receita',
            onPress: () => {
                navigation.navigate('RecipeCreation')
            },
        },
        {
            key: '5',
            name: 'Ajuda',
            onPress: () => {
                navigation.navigate('Help')
            },
        },
        {
            key: '6',
            name: 'Sobre',
            onPress: () => {
                navigation.navigate('About')
            },
        },
    ]
    return (
        <View>
            <ScrollView>
                <Header />
                <DefaultList style={style.container} items={items} />
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
})

MenuScreen.navigationOptions = {
    title: 'Menu',
    header: null,
}

export default MenuScreen
