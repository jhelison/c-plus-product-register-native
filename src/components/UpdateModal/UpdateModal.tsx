import React, { useState } from 'react'
import {
    Modal,
    Text,
    View,
    TouchableWithoutFeedback,
    FlatList,
    ToastAndroid,
    ListRenderItem
} from 'react-native'
import api from '../../API/Axios'
import { IUpdate } from '../../types/types'
import UpdateItem from '../UpdateItem/UpdateItem'
import styles from './styles'

interface IProps {
    visible: boolean
    onRequestClose: () => void
    CODPROD: string
}

const UpdateModal: React.FC<IProps> = ({
    visible,
    onRequestClose,
    CODPROD
}) => {
    const [updates, setUpdates] = useState<IUpdate[] | undefined>(undefined)

    const getUpdates = async () => {
        try {
            const res = await api.get(`/updates/${CODPROD}`)
            setUpdates(res.data as IUpdate[])
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            ToastAndroid.show(error.message, ToastAndroid.SHORT)
        }
    }

    const renderUpdatesNotFound = () => {
        return (
            <>
                <Text style={styles.notFoundText}>
                    Nenhuma atualização neste produto ainda
                </Text>
            </>
        )
    }

    const renderList = () => {
        return (
            <FlatList
                data={updates}
                renderItem={renderItem}
                keyExtractor={({ id }: IUpdate) => id.toString()}
                style={styles.listWrapper}
            />
        )
    }

    const renderItem: ListRenderItem<IUpdate> = ({ item }) => {
        return <UpdateItem item={item} />
    }

    return (
        <Modal
            transparent={true}
            visible={visible}
            onRequestClose={onRequestClose}
            animationType="fade"
            onShow={getUpdates}
        >
            <TouchableWithoutFeedback onPress={onRequestClose}>
                <View style={styles.modalBackground} />
            </TouchableWithoutFeedback>

            <View style={styles.modalWrapper}>
                {updates ? renderList() : renderUpdatesNotFound()}
            </View>

            <TouchableWithoutFeedback onPress={onRequestClose}>
                <View style={styles.modalBackground} />
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default UpdateModal
