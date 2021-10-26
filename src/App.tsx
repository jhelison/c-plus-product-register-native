import React, { useEffect, useState } from 'react'
import { StatusBar, ToastAndroid, View } from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import { getUniqueId } from 'react-native-device-info'

import styles from './screens/styles'

import theme from './styles/theme'
import StackNavigation from './navigation/StackNavigation'
import api, { setToken } from './API/Axios'
import Button from './components/Button/Button'
import CustomTextInput from './components/CustomTextInput/Text'

interface IToken {
    token: string
}

const App: React.FC = () => {
    const [screen, setScreen] = useState<string | null>(null)
    const [userName, setUserName] = useState('')

    useEffect(() => {
        updateNavigationBarColor()
        getToken()
    }, [])

    const updateNavigationBarColor = () => {
        changeNavigationBarColor(theme.colors.mainBg, false, false)
    }

    const getToken = async () => {
        const data = {
            phone_id: getUniqueId()
        }

        try {
            const res = await api.post('/auth/', data)
            setToken((res.data as IToken).token)
            setScreen('app')
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.request?.status === 404) {
                return setScreen('signin')
            }
            ToastAndroid.show(error.message, ToastAndroid.SHORT)
            setScreen('error')
        }
    }

    const createUser = async () => {
        const data = {
            phone_id: getUniqueId(),
            name: userName
        }

        try {
            await api.put('/users/', data)
            getToken()
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            ToastAndroid.show(error.message, ToastAndroid.SHORT)
            setScreen('error')
        }
    }

    const getScreen = () => {
        if (screen === 'signin') {
            return (
                <View
                    style={{
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%'
                    }}
                >
                    <CustomTextInput
                        placeholder="Nome do usuario"
                        value={userName}
                        onChangeText={(value) => setUserName(value)}
                        onPress={createUser}
                    />
                </View>
            )
        }
        if (screen === 'app') {
            return <StackNavigation />
        }
        if (screen === 'error') {
            return (
                <View
                    style={{
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%'
                    }}
                >
                    <Button text="Tentar novamente" onPress={getToken} />
                </View>
            )
        }
    }

    return (
        <View style={styles.wrapper}>
            {getScreen()}
            <StatusBar backgroundColor={theme.colors.mainBg} />
        </View>
    )
}

export default App
