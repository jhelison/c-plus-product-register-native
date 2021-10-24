import React, { useEffect, useState } from 'react'
import { FlatList, ToastAndroid, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import SearchBar from '../components/SearchBar/SearchBar'
import ProductList from '../components/ProductsList/ProductsList'
import api from '../API/Axios'
import styles from './styles'

import { IProduct } from '../types/types'

type RootStackParamList = {
    Search: undefined
    Details: { CODPROD: string; onGoBack: (CODPROD: string) => void }
}

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>

let page = 1
let flatListRef: FlatList<IProduct> | null = null

const SearchScreen: React.FC<Props> = ({ navigation }) => {
    const [products, setProducts] = useState<IProduct[] | undefined>(undefined)
    const [lastEntered, setLastEntered] = useState<string | undefined>(
        undefined
    )
    const [loading, setLoading] = useState(false)
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        getProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getProducts = async () => {
        const params = {
            NOMEPROD: searchText,
            PAGE: page
        }

        try {
            const response = await api.get('products', {
                params
            })

            if (page === 1) {
                setProducts(response.data as IProduct[])
            } else {
                const newList = products?.concat(response.data as IProduct[])
                setProducts(newList)
            }
            setLoading(false)

            page = page + 1
        } catch (error: any) {
            setLoading(false)
            ToastAndroid.show(error.message, ToastAndroid.SHORT)
        }
    }

    const onSubmitEditing = () => {
        setLoading(true)
        page = 1
        getProducts()
        flatListRef?.scrollToOffset({ offset: 0, animated: true })
        setLastEntered(undefined)
    }

    const onEndReached = () => {
        setLoading(true)
        getProducts()
    }

    const navigateTo = (CODPROD: string) => {
        setLastEntered(CODPROD)
        navigation.navigate('Details', { CODPROD, onGoBack: onGoBack })
    }

    const setFlatListRef = (ref: FlatList<IProduct> | null) => {
        flatListRef = ref
    }

    const getProduct = async (CODPROD: string) => {
        try {
            const res = await api.get(`/products/${CODPROD}`)
            return res.data as IProduct
        } catch (error: any) {
            ToastAndroid.show(error.message, ToastAndroid.SHORT)
        }
    }

    const onGoBack = async (CODPROD: string) => {
        const idx = products?.findIndex((product) => {
            return product.CODPROD === CODPROD
        })
        const new_product = await getProduct(CODPROD)

        if (new_product && idx !== undefined) {
            const products_clone = JSON.parse(
                JSON.stringify(products)
            ) as IProduct[]

            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            products_clone[idx!] = new_product

            setProducts(products_clone)
        }
    }

    return (
        <View style={styles.wrapper}>
            <SearchBar
                value={searchText}
                onChangeText={setSearchText}
                onSubmitEditing={onSubmitEditing}
                loading={loading}
                placeholder="Nome do produto"
            />
            <ProductList
                products={products}
                onEndReached={onEndReached}
                navigateTo={navigateTo}
                lastEntered={lastEntered}
                getRef={setFlatListRef}
            />
        </View>
    )
}

export default SearchScreen
