import React from 'react'
import { Text, View } from 'react-native'
import { IUpdate } from '../../types/types'
import styles from './styles'

import moment from 'moment'
import theme from '../../styles/theme'

interface IProps {
    item: IUpdate
}

const UpdateItem: React.FC<IProps> = ({ item }) => {
    return (
        <View style={styles.wrapper}>
            <Text style={[styles.userText, styles.flex2]}>
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
                    styles.flex1
                ]}
            >
                {item.quantity}
            </Text>
            <Text style={[styles.timeText, styles.flex2]}>
                {moment(item.created_at).fromNow()}
            </Text>
        </View>
    )
}

export default UpdateItem
