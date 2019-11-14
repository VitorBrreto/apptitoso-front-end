import React from 'react'
import MenuScreen from '../screens/MenuScreen'
import AboutScreen from '../screens/AboutScreen'
import CulinaryConceptNavigator from '../routes/CulinaryConceptNavigator'
import HelpScreen from '../screens/HelpScreen'
import PerfilScreen from '../screens/PerfilScreen'
import PostedRecipesScreen from '../screens/PostedRecipesScreen'
import { createStackNavigator } from 'react-navigation'

const MenuStack = createStackNavigator({
    Menu: MenuScreen,
    About: AboutScreen,
    CulinaryConceptNav: CulinaryConceptNavigator,
    Help: HelpScreen,
    Perfil: PerfilScreen,
    PostedRecipes: PostedRecipesScreen,
})

export default MenuStack