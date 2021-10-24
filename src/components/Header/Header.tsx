import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'

import Icon from 'react-native-vector-icons/FontAwesome5'
import theme from '../../styles/theme'

interface IProps {
    onPress: () => void
    title?: string
}

const Header: React.FC<IProps> = ({ onPress, title }) => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.goBackWrapper} onPress={onPress}>
                <Icon name="angle-left" size={30} color={theme.colors.white} />
            </TouchableOpacity>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    )
}

export default Header
