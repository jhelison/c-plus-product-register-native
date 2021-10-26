import { StyleSheet } from 'react-native'
import theme from '../../styles/theme'

export interface IProps {
    individual: boolean
}

const styles = ({ individual }: IProps) =>
    StyleSheet.create({
        wrapper: {
            height: 50,
            borderColor: theme.colors.lightGray,
            borderBottomWidth: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: theme.spacings.medium,
            flexDirection: 'row',
            borderTopWidth: individual ? 1 : 0
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
