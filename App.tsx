import React, {useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store, {persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {RootNavigation} from './navigation/RootNavigator';
import {AppState} from 'react-native';
import {checkToken} from './api/user';
function App(): React.JSX.Element {
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          await checkToken();
          console.log('App has come to the foreground!');
        }
        appState.current = nextAppState;
      },
    );
    checkToken();
  });
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
