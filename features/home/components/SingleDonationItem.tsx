import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Donation} from '../../../models/donation';
import style from '../style';
import Badge from '../../../components/Badge';

const SingleDonationItem = ({
  donation,
  onPress,
}: {
  donation: Donation;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style.donationContainer}>
        {donation.picture ? (
          <Image style={style.donationImage} source={{uri: donation.picture}} />
        ) : (
          <Image
            style={style.donationImage}
            source={require('./../../../assets/cactus.jpg')}
          />
        )}
        <View style={style.badgePositioning}>
          <Badge text={donation.tag} />
        </View>
        <Text style={style.donationTitle}>{donation.title}</Text>
        <Text style={style.donationPrice}>${donation.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SingleDonationItem;
