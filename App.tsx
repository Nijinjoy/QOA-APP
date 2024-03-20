import 'react-native-gesture-handler';
import React from 'react';
import type { PropsWithChildren } from 'react';
import { View, } from 'react-native';
import Routes from './src/navigation/Routes'
import { Provider } from 'react-redux';
import configureStore from './src/redux/store';

const store = configureStore()

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </Provider>
  );
}

export default App;
