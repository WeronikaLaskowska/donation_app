import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const homeStyles = StyleSheet.create({
  donationImage: {
    width: 155,
    height: 170,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
  },
  donationContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    margin: 5,
    position: 'relative',
    width: 160,
  },
  donationTitle: {
    color: '#0A043C',
    fontSize: 16,
    fontFamily: getFontFamily('Montserrat', '700'),
    marginLeft: 5,
  },
  donationPrice: {
    color: '#156CF7',
    fontSize: 16,
    fontFamily: getFontFamily('Montserrat', '700'),
    marginLeft: 5,
  },
  badgePositioning: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default homeStyles;
