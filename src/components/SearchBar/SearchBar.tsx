import React, { Dispatch, SetStateAction } from 'react'
import {
    View,
    TextInput,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

interface IProps {
    placeholder?: string
    onSubmitEditing?: () => void
    value?: string
    onChangeText?: Dispatch<SetStateAction<string>>
    loading?: boolean
}

const SearchBar: React.FC<IProps> = ({
    placeholder,
    onSubmitEditing,
    value,
    onChangeText,
    loading
}) => {
    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.TextInput}
                placeholder={placeholder}
                onSubmitEditing={onSubmitEditing}
                value={value}
                onChangeText={onChangeText}
                selectTextOnFocus
            />
            <TouchableOpacity
                style={styles.IconWrapper}
                onPress={onSubmitEditing}
            >
                {loading ? (
                    <ActivityIndicator size="large" />
                ) : (
                    <Icon style={styles.Icon} name="search" size={25} />
                )}
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar
