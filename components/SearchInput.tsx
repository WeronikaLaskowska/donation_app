import React, {useCallback, useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {Pressable, TextInput} from 'react-native-gesture-handler';
import style from './style';
const SearchInput = ({onSearch}: {onSearch: (v: string) => void}) => {
  const ref = useRef(null);
  const [postText, setPostText] = useState('');
  const handleFocus = () => {
    ref.current?.focus();
  };
  const onChangeText = useCallback(text => {
    setPostText(text);
    onSearch(text);
  }, []);
  return (
    <Pressable style={style.searchInputContainer}>
      <FontAwesomeIcon color="#25C0FF" icon={faSearch} />
      <TextInput
        value={postText}
        onChangeText={onChangeText}
        style={style.searchInput}
        ref={ref}
        placeholder="Search"
      />
    </Pressable>
  );
};

export default SearchInput;
