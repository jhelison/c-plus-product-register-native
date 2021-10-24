import React from 'react'
import { Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from './styles'
import moment from 'moment'
import 'moment/locale/pt-br'

import { IProduct } from '../../types/types'
import theme from '../../styles/theme'

moment.locale('pt-br')

interface IProps {
    product: IProduct
    navigateTo: (CODPROD: string) => void
    isLastEntered: boolean
}

const ProductListItem: React.FC<IProps> = ({
    product,
    navigateTo,
    isLastEntered
}) => {
    const onPress = () => {
        if (product.FLAGINATIVO) {
            ToastAndroid.show(
                'Produto atualmente desativado, reative no sistema para alterar estoque.',
                ToastAndroid.SHORT
            )
        } else {
            navigateTo(product.CODPROD)
        }
    }

    return (
        <TouchableOpacity
            style={[
                styles.wrapper,
                isLastEntered ? styles.lastEnteredWrapper : null
            ]}
            onPress={onPress}
        >
            <View style={styles.informationWrapper}>
                <Text style={styles.nameText}>{product.NOMEPROD}</Text>
            </View>

            <View style={styles.statsWrapper}>
                <Text style={styles.nameText}>
                    <Text style={styles.priceText}>
                        {product.PRECO.toFixed(2)}
                    </Text>
                    <Text> R$</Text>
                </Text>
                <Text style={styles.nameText}>
                    <Text>Estoque: </Text>
                    <Text style={styles.stockText}>
                        {product.ESTOQUE.ESTATU}
                    </Text>
                    <Text> {product.UNIDADE}</Text>
                </Text>
            </View>

            <View style={styles.enterWrapper}>
                <Icon name="angle-right" color={theme.colors.gray} size={20} />
            </View>

            {/* position: absolute */}
            <View style={styles.iconsWrapper}>
                {product.FLAGINATIVO && (
                    <Icon
                        style={styles.iconsGap}
                        name="ban"
                        color={theme.colors.gray}
                    />
                )}
                {!product.FLAGCONTROLAESTOQUE && (
                    <Icon
                        style={styles.iconsGap}
                        name="infinity"
                        color={theme.colors.gray}
                    />
                )}
                {product.FLAGNAOVENDER && (
                    <Icon
                        style={styles.iconsGap}
                        name="handshake-slash"
                        color={theme.colors.gray}
                    />
                )}
            </View>

            <Text style={styles.lastUpdateText}>
                {'Estoque atualizado ' +
                    moment(product.ESTOQUE.LAST_CHANGE).fromNow()}
            </Text>

            <Text style={styles.codeText}>{product.CODIGO}</Text>
        </TouchableOpacity>
    )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isEqual = (prevProps: IProps, nextProps: IProps) => {
    const isDataEqual =
        prevProps.product.ESTOQUE.ESTATU === nextProps.product.ESTOQUE.ESTATU
    const isOpenEqual = prevProps.isLastEntered === nextProps.isLastEntered
    return isDataEqual && isOpenEqual
}

export default React.memo(ProductListItem, isEqual)
