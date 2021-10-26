import React from 'react'
import { Text, View } from 'react-native'
import { IUpdate } from '../../types/types'
import styles from './styles'

import moment from 'moment'
import theme from '../../styles/theme'

export interface IProps {
    item: IUpdate
    individual?: boolean
}

const UpdateItem: React.FC<IProps> = ({ item, individual = false }) => {
    const styles_with_prop = styles({ individual })

    return (
        <View style={styles_with_prop.wrapper}>
            <Text style={[styles_with_prop.userText, styles_with_prop.flex2]}>
                {item.user.name}
            </Text>
            <Text
                style={[
                    {
                        color:
                            item.quantity >= 0
                                ? theme.colors.status.normal
                                : theme.colors.status.critical,
                        fontSize: theme.font.sizes.large,
                        fontWeight: 'bold',
                        textAlign: 'center'
                    },
                    styles_with_prop.flex1
                ]}
            >
                {item.quantity}
            </Text>
            <Text style={[styles_with_prop.timeText, styles_with_prop.flex2]}>
                {moment(item.created_at).fromNow()}
            </Text>
        </View>
    )
}

export default UpdateItem
