import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SearchScreen from '../screens/SearchScreen'
import ProductDatailScreen from '../screens/ProductDetailScreen'
import changeNavigationBarColor from 'react-native-navigation-bar-color'

type RootStackParamList = {
    Search: undefined
    Details: { CODPROD: string }
}

const RootStack = createNativeStackNavigator<RootStackParamList>()

const StackNavigation = () => {
    useEffect(() => {
        updateNavigationBarColor()
    }, [])

    const updateNavigationBarColor = () => {
        changeNavigationBarColor('#06092b', false, false)
    }

    return (
        <NavigationContainer>
            <RootStack.Navigator
                initialRouteName="Search"
                screenOptions={{ headerShown: false }}
            >
                <RootStack.Screen name="Search" component={SearchScreen} />
                <RootStack.Screen
                    name="Details"
                    component={ProductDatailScreen}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation
