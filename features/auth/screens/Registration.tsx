import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from '../../../assets/styles/globals';
import Input from '../../../components/Input';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import {getFontFamily} from '../../../assets/fonts/helper';

const Registration = () => {
  const [email, setEmail] = useState<string>();
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>();
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            justifyContent: 'center',
            marginHorizontal: 20,
          }}>
          <Header size={24} text="Hello and Welcome!" />
          <Input
            keyboardType={'email-address'}
            label="First & Last Name"
            placeholder="Enter your name"
            onChange={setName}
          />
          <Input
            keyboardType={'email-address'}
            label="Email"
            placeholder="Enter your email"
            onChange={setEmail}
          />
          <Input
            keyboardType={'default'}
            label="Password"
            isSecure
            placeholder="Enter your password"
            onChange={setPassword}
          />
          <Button onPress={() => {}} text="Register" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
