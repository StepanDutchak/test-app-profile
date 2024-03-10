import {StyleSheet} from 'react-native';
import themes from 'theme/colors';
import {fonts} from 'theme/fonts';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingHorizontal: 41,
    paddingVertical: 13,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderColor: themes.light.borderButton,
  },
  title: {
    ...fonts.title17M,
  },
});
