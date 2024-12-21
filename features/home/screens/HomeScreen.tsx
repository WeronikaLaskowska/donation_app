import React from 'react';
import {SafeAreaView, View} from 'react-native';
import globalStyles from '../../../assets/styles/globals';
import SearchInput from '../../../components/SearchInput';
import SingleDonationItem from '../components/SingleDonationItem';

function Home(): React.JSX.Element {
  return (
    <SafeAreaView style={[globalStyles.container]}>
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
