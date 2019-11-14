import React from 'react'
import { Image, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import style from './style'

const RecipeListItem = props => {
    const { name, imageSrc } = props
    return (
        <View style={{ ...style.container, ...props.style }}>
            <Image resizeMode='contain' style={style.image} source={imageSrc} />
            <Text style={style.text}>{name}</Text>
            <Icon style={style.icon} />
        </View>
    )
}

export default RecipeListItem
