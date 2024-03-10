import {StyleSheet} from 'react-native';
import {fonts} from 'theme/fonts';

export const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  titleRow: {
    ...fonts.title17N,
    marginLeft: 12,
  },
  emptyMargin: {
    marginTop: 0,
  },
});
