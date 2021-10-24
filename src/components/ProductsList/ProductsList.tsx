import React from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import styles from './styles'

import ProductListItem from '../ProductsListItem/ProductsListItem'

import { IProduct } from '../../types/types'

interface IProps {
    products: IProduct[] | undefined
    onEndReached: () => void
    navigateTo: (CODPROD: string) => void
    lastEntered: string | undefined
    getRef: (ref: FlatList<IProduct> | null) => void
}

const ProductList: React.FC<IProps> = ({
    products,
    onEndReached,
    navigateTo,
    lastEntered,
    getRef
}) => {
    const renderItem: ListRenderItem<IProduct> = ({ item }) => {
        const isLastEntered = item.CODPROD === lastEntered
        return (
            <ProductListItem
                product={item}
                navigateTo={navigateTo}
                isLastEntered={isLastEntered}
            />
        )
    }

    return (
        <FlatList
            style={styles.flatListWrapper}
            data={products}
            renderItem={renderItem}
            keyExtractor={({ CODPROD }: IProduct) => CODPROD}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
            initialNumToRender={10}
            removeClippedSubviews
            ref={(ref) => {
                getRef(ref)
            }}
        />
    )
}
export default ProductList
