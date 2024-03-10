import {StyleSheet} from 'react-native';
import themes from 'theme/colors';
import {fonts} from 'theme/fonts';

export const styles = StyleSheet.create({
  sectionTitle: {
    ...fonts.h1Title,
  },
  sliderContainer: {
    borderBottomWidth: 1,
    borderColor: themes.light.border,
    flexDirection: 'row',
    marginTop: 28,
  },
  extraSpace: {
    marginLeft: 20,
  },
  imageBG: {
    alignItems: 'flex-end',
    padding: 10,
    width: 155,
    height: 200,
  },
  sliderContentContainer: {
    marginTop: 24,
    borderRadius: 12,
    overflow: 'hidden',
  },
  mainContentScroll: {
    marginTop: 35,
  },
  adventuresMonthTitle: {
    ...fonts.title22M,
  },
  tabContainer: {},
  tabLine: {
    height: 4,
    marginTop: 12,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: themes.light.BLACK,
  },

  extraMargin: {
    marginLeft: 17,
  },
  column: {
    flex: 1,
    marginRight: 10,
  },
  separator: {
    borderRightWidth: 1,
    borderRightColor: themes.light.white,
  },
  tabTitle: {
    ...fonts.title17M,
  },
  descriptionContainer: {
    marginTop: 16,
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewTitle: {
    ...fonts.title17M,
    marginLeft: 4,
  },
  dateTitle: {
    ...fonts.title17N,
    marginLeft: 8,
  },
  mainTitle: {
    ...fonts.h2Title,

    marginTop: 10,
    maxWidth: 120,
  },
  fullLocationContainer: {
    marginTop: 11,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationFromTitle: {
    ...fonts.title14,
    marginRight: 8,
  },
  locationToTitle: {
    ...fonts.title14,
    marginLeft: 8,
  },
  locationTitle: {
    ...fonts.title14,
    marginTop: 11,
  },
  priceTitle: {
    ...fonts.title13N,
    marginTop: 11,
  },
});
