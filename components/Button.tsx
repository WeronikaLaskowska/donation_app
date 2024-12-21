import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import style from './style';

const Button = ({
  text,
  disabled,
  onPress,
}: {
  text: string;
  disabled?: boolean;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[style.button, disabled ? style.disabled : null]}
      disabled={disabled}>
      <Text style={style.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;