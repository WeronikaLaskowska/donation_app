import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import globalStyles from '../../../assets/styles/globals';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {DonationObj} from '../../../models/donation';
import SingleDonationItem from './SingleDonationItem';
import style from '../style';
import {updateSelectedDonationId} from '../../../redux/reducers/Donations';
import {Routes} from '../../../navigation/Routes';
import {NavigationProp} from '@react-navigation/native';

const DonationsList = ({navigation}: {navigation: NavigationProp<any>}) => {
  const categories = useSelector((state: RootState) => state.categories);
  const donations = useSelector((state: RootState) => state.donations);
  const dispatch = useDispatch();

  const [donationItems, setDonationItems] = useState<DonationObj[]>([]);

  useEffect(() => {
    const items = donations.donations.filter(item =>
      item.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(items);
  }, [categories.selectedCategoryId, donations.donations]);

  return (
    <SafeAreaView style={[globalStyles.container]}>
      <View style={style.donationsWrapper}>
        {donationItems.map((donation, index) => (
          <SingleDonationItem
            onPress={() => {
              dispatch(updateSelectedDonationId(donation.donationItemId));
              navigation.navigate(Routes.Donation);
            }}
            key={index}
            donation={{
              price: donation.price,
              tag:
                categories.categories.find(
                  el => el.categoryId === categories.selectedCategoryId,
                )?.name ?? '',
              title: donation.name,
              picture: donation.image,
            }}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default DonationsList;
