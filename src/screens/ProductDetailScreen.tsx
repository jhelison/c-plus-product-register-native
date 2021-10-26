import React, { useEffect, useState } from 'react'
import { Text, ToastAndroid, View, TextInput } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Header from '../components/Header/Header'
import Button from '../components/Button/Button'
import styles from './styles'
import api from '../API/Axios'
import { IProduct } from '../types/types'
import UpdateModal from '../components/UpdateModal/UpdateModal'
import TextCounter from '../components/TextCounter/TextCounter'
import UpdateItem from '../components/UpdateItem/UpdateItem'

type RootStackParamList = {
    Search: undefined
    Details: { CODPROD: string }
}

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>

const ProductDatailScreen: React.FC<Props> = ({ route, navigation }) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { CODPROD } = route.params!
    const [product, setProduct] = useState<IProduct | undefined>(undefined)
    const [stock, setStock] = useState('0')
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        getProduct()

        const interval = setInterval(getProduct, 5000)
        // eslint-disable-next-line react-hooks/exhaustive-deps

        return () => clearInterval(interval)
    }, [])

    const getProduct = async () => {
        try {
            const res = await api.get(`/products/${CODPROD}`)
            setProduct(res.data as IProduct)
        } catch (error: any) {
            ToastAndroid.show(error.message, ToastAndroid.SHORT)
        }
    }

    const updateStock = async () => {
        const data = {
            amount: parseFloat(stock)
        }

        try {
            await api.patch(`/stock/?CODPROD=${CODPROD}`, data)
            goBack()
        } catch (error: any) {
            ToastAndroid.show(error.message, ToastAndroid.SHORT)
        }
    }

    const goBack = () => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const onGoBack = route.params!['onGoBack'] as (CODPROD: string) => void
        onGoBack(CODPROD)
        navigation.goBack()
    }

    return (
        <View style={styles.wrapper}>
            <UpdateModal
                onRequestClose={() => setModalVisible(false)}
                visible={modalVisible}
                CODPROD={CODPROD}
            />
            <Header
                onPress={goBack}
                title={product?.NOMEPROD}
                infoPress={() => setModalVisible(true)}
            />
            {product?.last_stock_update && (
                <UpdateItem
                    item={product!.last_stock_update}
                    individual={true}
                />
            )}

            <View style={styles.centerTexts}>
                <Text style={styles.stockText}>Estoque atual</Text>
                <Text style={styles.stockNumber}>
                    {product?.ESTOQUE.ESTATU}
                </Text>
            </View>
            <View style={styles.centerTexts}>
                <Text style={styles.stockText}>Quanto a mais?</Text>
                <TextCounter
                    value={stock}
                    onChangeText={(value) => setStock(value)}
                />
            </View>
            <Button text="Salvar" onPress={updateStock} />
        </View>
    )
}

export default ProductDatailScreen
