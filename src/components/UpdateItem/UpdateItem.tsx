import React from 'react'
import { Text, View } from 'react-native'
import { IUpdate } from '../../types/types'
import styles from './styles'

import moment from 'moment'

interface IProps {
    item: IUpdate
}

const UpdateItem: React.FC<IProps> = ({ item }) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.userText}>{item.user.name}</Text>
            <Text>{item.quantity}</Text>
            <Text>{moment(item.created_at).fromNow()}</Text>
        </View>
    )
}

export default UpdateItem
