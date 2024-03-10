import {StyleSheet} from 'react-native';
import {fonts} from '../../../../../theme/fonts';
import themes from 'theme/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContent: {
    backgroundColor: themes.light.white,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerTitle: {
    ...fonts.h1Title,
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
