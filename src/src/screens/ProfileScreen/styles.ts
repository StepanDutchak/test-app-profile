import {StyleSheet} from 'react-native';
import themes from 'theme/colors';

export const styles = StyleSheet.create({
  additionalHeaderIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: themes.light.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTopSection: {
    marginTop: 12,
  },
  divider: {
    height: 1,
    backgroundColor: themes.light.border,
    marginVertical: 32,
    width: '100%',
  },
  adventuresSection: {
    marginTop: 32,
  },
});
