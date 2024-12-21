import React from 'react';
import {Text, View} from 'react-native';
import style from './style';

const Header = ({text, size}: {text: string; size: number}) => {
  return (
    <View>
      <Text style={[style.header, {fontSize: size}]}>{text}</Text>
    </View>
  );
};

export default Header;
