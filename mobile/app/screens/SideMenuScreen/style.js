import { StyleSheet } from 'react-native'
import {colors} from '../../styles'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.color1,
    },
    header: {
        flex: 1,
    },
    searchField: {
        flex: 3,
    },
    result: {
        flex: 16,
    }
})

export default style
