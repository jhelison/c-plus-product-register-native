import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import SearchBar from '../components/SearchBar/SearchBar'
import ProductList from '../components/ProductsList/ProductsList'
import api from '../API/Axios'
import styles from './styles'

import { IProduct } from '../types/types'

type RootStackParamList = {
    Search: undefined
    Details: { CODPROD: string }
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
        } catch (error) {
            console.log(error)
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
        navigation.navigate('Details', { CODPROD })
    }

    const setFlatListRef = (ref: FlatList<IProduct> | null) => {
        flatListRef = ref
    }

    const onGoBack = () => {
        onSubmitEditing()
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
