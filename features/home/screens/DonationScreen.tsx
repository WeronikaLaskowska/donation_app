import React from 'react';

import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from '../../../assets/styles/globals';
import ReturnBtn from '../../../components/ReturnBtn';
import style from '../style';
import {useRoute} from '@react-navigation/native';
import Badge from '../../../components/Badge';
import Header from '../../../components/Header';
import Button from '../../../components/Button';

function DonationScreen({navigation}): React.JSX.Element {
  const donations = useSelector((state: RootState) => state.donations);
  const router = useRoute();
  const chosenObj = donations.donations.find(
    item => item.donationItemId === donations.selectedDonationId,
  );
  return (
    <SafeAreaView style={[globalStyles.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.homeWrapper}>
          <ReturnBtn onPress={() => navigation.goBack()} />
          {chosenObj?.image ? (
            <Image
              style={style.donationScreenImage}
              source={{uri: chosenObj.image}}
            />
          ) : (
            <Image
              style={style.donationScreenImage}
              source={require('./../../../assets/cactus.jpg')}
            />
          )}
          <Badge text={router?.params?.category ?? ''} />
          <Header size={24} text={chosenObj?.name ?? ''} />
          <Text style={style.donationDescription}>
            {chosenObj?.description}
          </Text>
        </View>
      </ScrollView>
      <Button onPress={() => null} text="Donate" />
    </SafeAreaView>
  );
}

export default DonationScreen;
