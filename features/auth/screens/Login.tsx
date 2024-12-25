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
import {Routes} from '../../../navigation/Routes';
import {login} from '../../../api/user';
import {useDispatch} from 'react-redux';
import {logIn} from '../../../redux/reducers/User';

const Login = ({navigation}) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [error, setError] = useState<string>();
  const dispatch = useDispatch();
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
            onChange={setPassword}
          />
          {error && (
            <Text
              style={{
                fontFamily: getFontFamily('Montserrat', '600'),
                color: 'red',
              }}>
              {error}
            </Text>
          )}
          <Button
            disabled={
              !email || !password || email?.length < 5 || password?.length < 5
            }
            onPress={async () => {
              let user = await login(email as string, password as string);
              if (!user.status) {
                setError(user.error);
                return;
              }
              dispatch(logIn(user.data));
              navigation.navigate(Routes.Home);
              setEmail('');
            }}
            text="Login"
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(Routes.Registration);
            }}>
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
