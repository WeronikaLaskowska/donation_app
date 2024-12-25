import React, {useCallback, useRef, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import style from './style';
import {KeyboardTypeOptions, Text, View} from 'react-native';
const Input = ({
  onChange,
  label,
  placeholder,
  keyboardType,
  isSecure,
}: {
  onChange: (v: string) => void;
  label: string;
  placeholder: string;
  isSecure?: boolean;
  keyboardType: KeyboardTypeOptions;
}) => {
  const ref = useRef(null);
  const [postText, setPostText] = useState('');

  const handleFocus = () => {
    ref.current?.focus();
  };

  const onChangeText = useCallback((text: string) => {
    setPostText(text);
    onChange(text);
  }, []);

  return (
    <View>
      <Text style={style.inputLabel}>{label}</Text>
      <TextInput
        secureTextEntry={isSecure ? true : false}
        keyboardType={keyboardType}
        value={postText}
        onChangeText={onChangeText}
        style={style.inputStyle}
        ref={ref}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;
