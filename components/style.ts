import {StyleSheet} from 'react-native';
import {getFontFamily} from '../assets/fonts/helper';
import {horizontalScale, verticalScale} from '../assets/styles/scaling';

const componentStyles = StyleSheet.create({
  header: {
    fontFamily: getFontFamily('Montserrat', '600'),
    color: '#022150',
    lineHeight: 30,
  },
  button: {
    backgroundColor: '#2979F2',
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(20),
    borderRadius: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(10),
    marginHorizontal: horizontalScale(10),
  },
  badge: {
    backgroundColor: '#145855',
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(7),
    borderRadius: verticalScale(100),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(10),
    width: 85,
  },
  disabled: {
    backgroundColor: '#CCCCCC',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: getFontFamily('Montserrat', '600'),
  },
  textBadge: {
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: getFontFamily('Montserrat', '700'),
  },
  searchInputContainer: {
    backgroundColor: '#F3F5F9',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: verticalScale(15),
    paddingHorizontal: 10,
    margin: 5,
    overflow: 'hidden',
    height: 50,
  },
  searchInput: {
    height: '100%',
    width: '90%',
    fontFamily: getFontFamily('Montserrat', '500'),
  },
  returnBtn: {
    marginBottom: 10,
    width: 44,
    height: 44,
    backgroundColor: '#FAFAFA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },

  inputLabel: {
    fontFamily: getFontFamily('Montserrat', '400'),
    color: '#36455A',
    fontSize: 12,
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderColor: '#e7e7e7',
    color: '#022150',
    marginTop: 3,
    minWidth: 320,
  },
});

export default componentStyles;
