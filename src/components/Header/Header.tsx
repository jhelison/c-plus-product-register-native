import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'

import Icon from 'react-native-vector-icons/FontAwesome5'
import theme from '../../styles/theme'

interface IProps {
    onPress: () => void
    title?: string
    infoPress: () => void
}

const Header: React.FC<IProps> = ({ onPress, title, infoPress }) => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.iconWrapper} onPress={onPress}>
                <Icon name="angle-left" size={30} color={theme.colors.white} />
            </TouchableOpacity>
            <Text style={styles.titleText}>{title}</Text>
            <TouchableOpacity style={styles.iconWrapper} onPress={infoPress}>
                <Icon
                    name="exclamation-circle"
                    size={30}
                    color={theme.colors.white}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Header
