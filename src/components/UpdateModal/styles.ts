import { StyleSheet } from 'react-native'
import theme from '../../styles/theme'

const styles = StyleSheet.create({
    modalBackground: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        flex: 1
    },
    modalWrapper: {
        flex: 2,
        backgroundColor: theme.colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    notFoundText: {
        fontSize: theme.font.sizes.xxlarge,
        textAlign: 'center'
    },
    listWrapper: {
        width: '100%',
        height: '100%'
    }
})

export default styles
