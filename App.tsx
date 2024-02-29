import 'react-native-gesture-handler';
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  View,
} from 'react-native';
import Routes from './src/navigation/Routes'

function App(): React.JSX.Element {

  return (
    <View style={{ flex: 1 }}>
      <Routes />
    </View>
  );
}

export default App;
