import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

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
    left: 10,
  },

  homeWrapper: {
    marginVertical: verticalScale(25),
    marginHorizontal: horizontalScale(20),
  },
  smallDashboardText: {
    color: '#636776',
    fontSize: 16,
    fontFamily: getFontFamily('Montserrat', '500'),
    marginBottom: 5,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 999,
    objectFit: 'cover',
  },

  searchBarWrapper: {
    marginTop: 20,
  },
  bannerImage: {
    marginTop: 20,
    width: '100%',
    height: 170,
  },

  donationsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  donationScreenImage: {
    width: 340,
    height: 240,
    borderRadius: 5,
    marginBottom: 20,
  },
  donationDescription: {
    fontSize: 14,
    fontFamily: getFontFamily('Montserrat', '400'),
    color: '#000000',
    marginBottom: 5,
    marginTop: 10,
  },
  donateButtonPositioning: {
    position: 'static',
    bottom: 0,
  },
});

export default homeStyles;
