import React, { FC } from 'react';

import { NavigationContainer } from '@react-navigation/native';

// import {MyAppTheme} from '../layouts/theme';

// import {useSelector} from '../config/function';
// import {RXStore} from '../utils/redux';
// import {PortalHost} from '../components/common/portal';
// import {StatusBar} from 'react-native';
// import {navigationRef} from './navigation-service';

// import RootNavigation from './root-navigation';
// import HandlingError from '../components/HandlingError';
// import {SnackBar} from '../components/common/AppSnack';
import linking from '../utils/linking.utils';
import { StatusBar } from 'react-native';
import RootNavigation from './root-navigation';
import { PortalHost } from '../common/portal';

const AppNavigationContainer: FC<AppNavigationContainerProps> = ({ }) => {

    return (
        <NavigationContainer
            linking={linking}
        >
            <StatusBar backgroundColor={'transparent'} translucent />
            <>
                <RootNavigation />
                {/* <PortalHost name={'Bottom-Sheet'} /> */}
            </>
        </NavigationContainer>
    );
};

interface AppNavigationContainerProps {
    children?: any;
}

export default AppNavigationContainer;
