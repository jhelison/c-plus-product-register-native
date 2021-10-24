import React, { useEffect, useState } from 'react'
import { Text, ToastAndroid, View, TextInput } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Header from '../components/Header/Header'
import Button from '../components/Button/Button'
import styles from './styles'
import api from '../API/Axios'
import { IProduct } from '../types/types'

type RootStackParamList = {
    Search: undefined
    Details: { CODPROD: string }
}

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>

const ProductDatailScreen: React.FC<Props> = ({ route, navigation }) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { CODPROD } = route.params!
    const [product, setProduct] = useState<IProduct | undefined>(undefined)
    const [stock, setStock] = useState(0)

    useEffect(() => {
        getProduct()

        const interval = setInterval(getProduct, 5000)
        // eslint-disable-next-line react-hooks/exhaustive-deps

        return () => clearInterval(interval)
    }, [])

    const getProduct = async () => {
        console.log('up')
        try {
            const res = await api.get(`/products/${CODPROD}`)
            setProduct(res.data as IProduct)
        } catch (error: any) {
            ToastAndroid.show(error.message, ToastAndroid.SHORT)
        }
    }

    const updateStock = async () => {
        const data = {
            amount: stock
        }

        console.log(data)

        try {
            await api.patch(`/stock/?CODPROD=${CODPROD}`, data)
            navigation.goBack()
        } catch (error: any) {
            ToastAndroid.show(error.message, ToastAndroid.SHORT)
        }
    }

    const goBack = () => {
        navigation.goBack()
    }

    const OnChangeText = (value: string) => {
        if (value) {
            setStock(parseInt(value))
        } else {
            setStock(0)
        }
    }

    return (
        <View style={styles.wrapper}>
            <Header onPress={goBack} title={product?.NOMEPROD} />
            <View style={styles.centerTexts}>
                <Text style={styles.stockText}>Estoque atual</Text>
                <Text style={styles.stockNumber}>
                    {product?.ESTOQUE.ESTATU}
                </Text>
            </View>
            <View style={styles.centerTexts}>
                <Text style={styles.stockText}>Quanto a mais?</Text>
                <TextInput
                    style={styles.inputText}
                    value={stock.toString()}
                    keyboardType="phone-pad"
                    onChangeText={OnChangeText}
                />
            </View>
            <Button text="Salvar" onPress={updateStock} />
        </View>
    )
}

export default ProductDatailScreen
