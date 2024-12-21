import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {getFontFamily} from './assets/fonts/helper';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text
        style={{
          color: 'red',
          fontSize: 40,
          fontFamily: getFontFamily('Montserrat', '800'),
        }}>
        Helol world
      </Text>
    </SafeAreaView>
  );
}

export default App;
