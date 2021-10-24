import React, { useEffect } from 'react'
import { StatusBar, View } from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import { getUniqueId } from 'react-native-device-info'

import styles from './screens/styles'

import theme from './styles/theme'
import StackNavigation from './navigation/StackNavigation'
import api from './API/Axios'

const App: React.FC = () => {
    useEffect(() => {
        updateNavigationBarColor()
    }, [])

    const updateNavigationBarColor = () => {
        changeNavigationBarColor(theme.colors.mainBg, false, false)
    }

    const getToken = async () => {
        const data = {
            phone_id: getUniqueId()
        }

        try {
            const res = api.post('/auth/', data)
        } catch (error: any) {
            console.log('error')
        }
    }

    return (
        <View style={styles.wrapper}>
            <StackNavigation />
            <StatusBar backgroundColor={theme.colors.mainBg} />
        </View>
    )
}

export default App
