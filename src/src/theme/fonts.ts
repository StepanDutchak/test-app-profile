import {StyleSheet} from 'react-native';
import variables from './variables';
import themes from './colors';

export const fonts = StyleSheet.create({
  h1Title: {
    fontFamily: variables.fontsType.OutfitBold,
    fontWeight: variables.fontWeight.bold,
    fontSize: variables.fontSize.size20,
    lineHeight: variables.lineHeight[25],
    color: themes.light.text.primary,
  },
  h2Title: {
    fontFamily: variables.fontsType.OutfitBold,
    fontWeight: variables.fontWeight.bold,
    fontSize: variables.fontSize.size16,
    lineHeight: variables.lineHeight[22],
    color: themes.light.text.primary,
  },
  h3Title: {
    fontFamily: variables.fontsType.OutfitBold,
    fontWeight: variables.fontWeight.bold,
    fontSize: variables.fontSize.size20,
    lineHeight: variables.lineHeight[24],
    letterSpacing: variables.letterSpacing['0.5'],
    color: themes.light.text.primary,
  },
  title22M: {
    fontFamily: variables.fontsType.OutfitMedium,
    fontWeight: variables.fontWeight.medium,
    fontSize: variables.fontSize.size22,
    lineHeight: variables.lineHeight[28],
    color: themes.light.text.primary,
  },
  title14: {
    fontFamily: variables.fontsType.OutfitRegular,
    fontWeight: variables.fontWeight.semibold,
    fontSize: variables.fontSize.size14,
    lineHeight: variables.lineHeight[17],
    color: themes.light.text.primary,
  },
  title13N: {
    fontFamily: variables.fontsType.OutfitRegular,
    fontWeight: variables.fontWeight.normal,
    fontSize: variables.fontSize.size13,
    lineHeight: variables.lineHeight[17],
    color: themes.light.text.primary,
  },
  subtitle13: {
    fontFamily: variables.fontsType.OutfitRegular,
    fontWeight: variables.fontWeight.normal,
    fontSize: variables.fontSize.size13,
    lineHeight: variables.lineHeight[16],
    color: themes.light.text.primary,
  },
  title17M: {
    fontFamily: variables.fontsType.OutfitMedium,
    fontWeight: variables.fontWeight.medium,
    fontSize: variables.fontSize.size16,
    lineHeight: variables.lineHeight[22],
    color: themes.light.text.primary,
  },
  title17R: {
    fontFamily: variables.fontsType.OutfitRegular,
    fontWeight: variables.fontWeight.regular,
    fontSize: variables.fontSize.size14,
    lineHeight: variables.lineHeight[20],
    color: themes.light.text.primary,
  },
  title17N: {
    fontFamily: variables.fontsType.OutfitRegular,
    fontWeight: variables.fontWeight.normal,
    fontSize: variables.fontSize.size14,
    lineHeight: variables.lineHeight[20],
    color: themes.light.text.primary,
  },
  title11EXB: {
    fontFamily: variables.fontsType.OutfitBold,
    fontWeight: variables.fontWeight.extrabold,
    fontSize: variables.fontSize.size10,
    lineHeight: variables.lineHeight[14],
    color: themes.light.text.primary,
    letterSpacing: variables.letterSpacing['1'],
  },
  title16B: {
    fontFamily: variables.fontsType.OutfitBold,
    fontWeight: variables.fontWeight.bold,
    fontSize: variables.fontSize.size16,
    lineHeight: variables.lineHeight[20],
    color: themes.dark.text.primary,
    letterSpacing: variables.letterSpacing['1'],
  },
});
