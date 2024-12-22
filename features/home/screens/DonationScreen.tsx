import React from 'react';

import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {Text} from 'react-native';

function DonationScreen(): React.JSX.Element {
  const donations = useSelector((state: RootState) => state.donations);

  const chosenObj = donations.donations.find(
    item => item.donationItemId === donations.selectedDonationId,
  );
  console.log(chosenObj);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text>{chosenObj?.description}</Text>
    </ScrollView>
  );
}

export default DonationScreen;
