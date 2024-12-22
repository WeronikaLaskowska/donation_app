import React from 'react';
import {SafeAreaView, View} from 'react-native';
import globalStyles from '../../../assets/styles/globals';
import SearchInput from '../../../components/SearchInput';
import SingleDonationItem from '../components/SingleDonationItem';
import Header from '../../../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import Button from '../../../components/Button';
import {updateFirstName} from '../../../redux/reducers/User';
function Home(): React.JSX.Element {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  console.log(user);
  return (
    <SafeAreaView style={[globalStyles.container]}>
      <Header size={24} text={`${user.firstName} ${user.lastName}`} />
      <Button
        text="Press me to change name"
        onPress={() => {
          dispatch(updateFirstName({firstName: 'Piotr'}));
        }}
      />
      <SearchInput onSearch={() => {}} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
        <SingleDonationItem
          donation={{
            price: '123',
            tag: 'Envornment',
            title: 'Test donation iem',
            picture:
              'https://images.unsplash.com/photo-1732647169576-49abfdef3348?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        />
        <SingleDonationItem
          donation={{
            price: '123',
            tag: 'Envornment',
            title: 'Test donation iem',
            picture:
              'https://images.unsplash.com/photo-1732647169576-49abfdef3348?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        />
        <SingleDonationItem
          donation={{
            price: '123',
            tag: 'Envornment',
            title: 'Test donation iem',
            picture:
              'https://images.unsplash.com/photo-1732647169576-49abfdef3348?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        />
        <SingleDonationItem
          donation={{
            price: '123',
            tag: 'Envornment',
            title: 'Test donation iem',
            picture:
              'https://images.unsplash.com/photo-1732647169576-49abfdef3348?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;

{
  /* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{minWidth: 180}}>
          <Tab text="Highlight " onPress={() => {}} />
        </View>
        <View style={{minWidth: 180}}>
          <Tab text="2" disabled onPress={() => {}} />
        </View>
        <View style={{minWidth: 180}}>
          <Tab text="3" disabled onPress={() => {}} />
        </View>
        <View style={{minWidth: 180}}>
          <Tab text="4" disabled onPress={() => {}} />
        </View>
      </ScrollView> */
}
