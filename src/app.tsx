import { View, Text, StatusBar, KeyboardAvoidingView, Platform } from 'react-native'
import React, { Suspense } from 'react'
import { AppModule } from './app/common';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { I18nextProvider } from 'react-i18next';
import i18n from './app/libraly/utils/i18n/i18n';
import { Provider } from 'react-redux';
import { PortalProvider } from './app/common/portal';
import AppNavigationContainer from './app/navigation';

export const MyApp = () => {

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar barStyle={'dark-content'} hidden={false} backgroundColor='black' />
            <SafeAreaProvider>
                {/* <Provider store={store}> */}
                <I18nextProvider i18n={i18n}>
                    <KeyboardAvoidingView
                        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={{ flex: 1 }}>
                        <GestureHandlerRootView style={{ flex: 1 }}>
                            {/* <PortalProvider> */}
                            <AppNavigationContainer />
                            {/* </PortalProvider> */}
                        </GestureHandlerRootView>
                    </KeyboardAvoidingView>
                </I18nextProvider>
                {/* </Provider> */}
            </SafeAreaProvider>
        </GestureHandlerRootView>

    );
};