import { StyleSheet } from 'react-native'
import theme from '../../styles/theme'

const styles = StyleSheet.create({
    wrapper: {
        height: 50,
        borderBottomColor: theme.colors.lightGray,
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: theme.spacings.medium,
        flexDirection: 'row'
    },
    userText: {
        fontSize: theme.font.sizes.large
    },
    timeText: {
        textAlign: 'right'
    },
    flex2: {
        flex: 2
    },
    flex1: {
        flex: 1
    }
})

export default styles
