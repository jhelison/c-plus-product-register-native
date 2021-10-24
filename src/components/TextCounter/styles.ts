import { StyleSheet } from 'react-native'
import theme from '../../styles/theme'

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row'
    },
    inputText: {
        color: theme.colors.white,
        fontSize: theme.font.sizes.xxlarge * 2,
        marginHorizontal: theme.spacings.medium
    },
    touchWrapper: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles
