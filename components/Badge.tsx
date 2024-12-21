import React from 'react';
import {Text, View} from 'react-native';
import style from './style';

const Badge = ({text}: {text: string}) => {
  return (
    <View style={[style.badge]}>
      <Text style={style.textBadge}>{text}</Text>
    </View>
  );
};

export default Badge;
