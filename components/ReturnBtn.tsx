import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const ReturnBtn = ({onPress}: {onPress: () => void}) => {
  return (
    <TouchableOpacity style={style.returnBtn} onPress={onPress}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </TouchableOpacity>
  );
};

export default ReturnBtn;
