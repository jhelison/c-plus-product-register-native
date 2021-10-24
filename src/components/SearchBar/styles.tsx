import { StyleSheet } from 'react-native'
import theme from '../../styles/theme'

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: theme.colors.lightGray,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacings.xsmall,
        marginBottom: theme.spacings.xsmall
    },
    TextInput: {
        flexGrow: 1,
        marginRight: 5,
        color: theme.colors.black,
        fontSize: theme.font.sizes.medium
    },
    Icon: {
        color: theme.colors.gray
    },
    IconWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        alignSelf: 'stretch'
    }
})

export default styles
