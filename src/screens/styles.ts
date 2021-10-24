import { StyleSheet } from 'react-native'
import theme from '../styles/theme'

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.mainBg,
        padding: theme.spacings.xsmall,
        justifyContent: 'space-between'
    },
    stockText: {
        color: theme.colors.white,
        fontSize: theme.font.sizes.xxlarge
    },
    stockNumber: {
        color: theme.colors.white,
        fontSize: theme.font.sizes.xxlarge * 2
    },
    centerTexts: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles
