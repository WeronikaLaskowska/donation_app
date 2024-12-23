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

const Login = () => {
  const [email, setEmail] = useState<string>();
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
          <Header size={24} text="Welcome Back" />
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
            onChange={setEmail}
          />

          <Button onPress={() => {}} text="Login" />
          <TouchableOpacity onPress={() => {}}>
            <Text
              style={{
                textAlign: 'center',
                color: '#156CF7',
                fontSize: 16,
                fontFamily: getFontFamily('Montserrat', '700'),
              }}>
              Don’t have an account?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
