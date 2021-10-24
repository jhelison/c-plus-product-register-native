import React, { useEffect } from 'react'
import { StatusBar, View } from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color'

import styles from './screens/styles'

import theme from './styles/theme'
import StackNavigation from './navigation/StackNavigation'

const App: React.FC = () => {
    useEffect(() => {
        updateNavigationBarColor()
    }, [])

    const updateNavigationBarColor = () => {
        changeNavigationBarColor(theme.colors.mainBg, false, false)
    }

    return (
        <View style={styles.wrapper}>
            <StackNavigation />
            <StatusBar backgroundColor={theme.colors.mainBg} />
        </View>
    )
}

export default App
