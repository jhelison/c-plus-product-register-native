import { StyleSheet } from 'react-native'
import theme from '../../styles/theme'

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: theme.colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacings.small
    },
    text: {
        fontSize: theme.font.sizes.medium,
        color: theme.colors.white
    }
})

export default styles
