import { StyleSheet } from 'react-native'
import theme from '../../styles/theme'

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },

    goBackWrapper: {
        height: '100%',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titleText: {
        color: theme.colors.white,
        fontSize: theme.font.sizes.large
    }
})

export default styles
