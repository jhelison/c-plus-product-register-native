import React from 'react'
import { Text, TextInput, View, TouchableHighlight } from 'react-native'
import theme from '../../styles/theme'
import styles from './styles'

interface IProps {
    value: string
    onChangeText: (value: string) => void
}

const regex = new RegExp('^[+-]?([0-9]+\\.?[0-9]*|\\.[0-9]+)$')

const TextCounter: React.FC<IProps> = ({ onChangeText, value }) => {
    const subtract = () => {
        const num = parseFloat(value)

        onChangeText((num - 1).toString())
    }

    const toNegative = () => {
        const num = parseFloat(value) * -1

        onChangeText(num.toString())
    }

    const add = () => {
        const num = parseFloat(value)

        onChangeText((num + 1).toString())
    }

    const parseToFloat = () => {
        let num = parseFloat(value)

        if (isNaN(num)) {
            num = 0
        }

        onChangeText(num.toString())
    }

    const reExperiment = (value: string) => {
        if (!value.match(regex)) {
            value = value.substring(0, value.length - 1)
        }

        onChangeText(value)
    }

    return (
        <View style={styles.wrapper}>
            <TouchableHighlight
                style={styles.touchWrapper}
                onPress={subtract}
                onLongPress={toNegative}
            >
                <Text
                    style={[
                        styles.inputText,
                        { color: theme.colors.status.critical }
                    ]}
                >
                    -
                </Text>
            </TouchableHighlight>

            <TextInput
                style={styles.inputText}
                value={value}
                keyboardType="phone-pad"
                onChangeText={reExperiment}
                onBlur={parseToFloat}
                maxLength={5}
            />

            <TouchableHighlight style={styles.touchWrapper} onPress={add}>
                <Text
                    style={[
                        styles.inputText,
                        { color: theme.colors.status.normal }
                    ]}
                >
                    +
                </Text>
            </TouchableHighlight>
        </View>
    )
}

export default TextCounter
