import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SettingScreen from '../screens/SettingScreen/SettingScreen';
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <SafeAreaProvider>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'HOME_SCREEN'} component={HomeScreen} />
                <Stack.Screen name={'SETTING_SCREEN'} component={SettingScreen} />
            </Stack.Navigator>
        </SafeAreaProvider>

    )
}

export default RootNavigation