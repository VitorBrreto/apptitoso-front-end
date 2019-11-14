import React from 'react'
import { View } from 'react-native'
import MaterialHeader from '../../components/MaterialHeader'
import PostedRecipesList from '../../components/PostedRecipesList'
import BottomTab from '../../routes/BottomTabAppNavigator'
import style from './style'

<<<<<<< HEAD
const listData = [
    {
        key: 'a',
        name: 'Bolo de Cenouras',
        imageSrc: require('../../assets/placeholderPhoto.jpg'),
    },
    {
        key: 'b',
        name: 'Bom de Queijo',
        imageSrc: require('../../assets/placeholderPhoto.jpg'),
    },
    {
        key: 'c',
        name: 'Frutas Cristalizadas',
        imageSrc: require('../../assets/placeholderPhoto.jpg'),
    },
    {
        key: 'd',
        name: 'Gelo',
        imageSrc: require('../../assets/placeholderPhoto.jpg'),
    },
    {
        key: 'e',
        name: 'Bolo Decorativo',
        imageSrc: require('../../assets/placeholderPhoto.jpg'),
    },
    {
        key: 'f',
        name: 'Suco Funcional de Abacaxi',
        imageSrc: require('../../assets/placeholderPhoto.jpg'),
    },
    {
        key: 'g',
        name: 'Água Gelada',
        imageSrc: require('../../assets/placeholderPhoto.jpg'),
    },
    {
        key: 'h',
        name: 'Bolo Verde',
        imageSrc: require('../../assets/placeholderPhoto.jpg'),
    },
]

const PostedRecipesScreen = props => {
    return (
        <View style={style.container}>
            <MaterialHeader style={style.header} />
            <PostedRecipesList style={style.result} data={listData} />
=======
const PostedRecipesScreen = ({ navigation }) => {
    return (
        <View style={style.container}>
            <MaterialHeader style={style.header} />
            <PostedRecipesList style={style.result} />
            <BottomTab />
>>>>>>> babi/navigation
        </View>
    )
}

PostedRecipesScreen.navigationOptions = {
    title: 'PostedRecipes',
    header: null,
}

export default PostedRecipesScreen
