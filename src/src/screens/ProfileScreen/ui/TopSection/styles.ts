import {StyleSheet} from 'react-native';
import {fonts} from 'theme/fonts';

export const styles = StyleSheet.create({
  titleUserContainer: {
    alignItems: 'center',
    marginTop: 24,
  },
  nameTitle: {
    ...fonts.h1Title,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  ratingTitle: {
    ...fonts.h2Title,
    marginLeft: 8,
    textDecorationLine: 'underline',
  },
  reviewsTitle: {
    ...fonts.title17M,
    marginLeft: 8,
    textDecorationLine: 'underline',
  },
  followersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  followersTitle: {
    ...fonts.title17M,
  },
  followingTitle: {
    ...fonts.title17M,
    marginLeft: 16,
  },
  containerButtonBlock: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerGeneralUserTitle: {
    marginTop: 32,
  },
  generalUserTitle: {
    ...fonts.title17R,
  },
});
