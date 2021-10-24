import React from 'react'
import { TextInput, View } from 'react-native'
import Button from '../Button/Button'
import styles from './styles'

interface IProps {
    placeholder: string
    value: string
    onChangeText: (value: string) => void
    onPress: () => void
}

const CustomTextInput: React.FC<IProps> = ({
    placeholder,
    value,
    onChangeText,
    onPress
}) => {
    return (
        <View>
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />
            <Button text="Criar" onPress={onPress} />
        </View>
    )
}

export default CustomTextInput
