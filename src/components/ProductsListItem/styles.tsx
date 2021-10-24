import { StyleSheet } from 'react-native'
import theme from '../../styles/theme'

const styles = StyleSheet.create({
    wrapper: {
        height: 100,
        backgroundColor: theme.colors.white,
        alignSelf: 'stretch',
        flexDirection: 'row',
        padding: theme.spacings.xsmall,
        marginVertical: theme.spacings.xxsmall
    },

    lastEnteredWrapper: {
        borderColor: theme.colors.primary,
        borderWidth: 2
    },

    iconsWrapper: {
        position: 'absolute',
        top: theme.spacings.xsmall,
        right: theme.spacings.xsmall,
        color: theme.colors.gray,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconsGap: {
        paddingLeft: theme.spacings.xxsmall
    },

    lastUpdateText: {
        position: 'absolute',
        bottom: theme.spacings.xsmall,
        right: theme.spacings.xsmall,
        color: theme.colors.gray,
        fontSize: theme.font.sizes.xsmall
    },
    codeText: {
        position: 'absolute',
        bottom: theme.spacings.xsmall,
        left: theme.spacings.xsmall,
        color: theme.colors.gray,
        fontSize: theme.font.sizes.xsmall
    },
    nameText: {
        color: theme.colors.black,
        fontSize: theme.font.sizes.medium
    },
    priceText: {
        fontWeight: 'bold',
        fontSize: theme.font.sizes.large
    },
    stockText: {
        fontWeight: 'bold',
        fontSize: theme.font.sizes.xlarge
    },

    informationWrapper: {
        height: '100%',
        width: '55%'
    },
    statsWrapper: {
        height: '100%',
        width: '35%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    enterWrapper: {
        height: '100%',
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styles
