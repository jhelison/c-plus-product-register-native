import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

interface IProps {
    text: string
    onPress: () => void
}

const Button: React.FC<IProps> = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.wrapper} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button
