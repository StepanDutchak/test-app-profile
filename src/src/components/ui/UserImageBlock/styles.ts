import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifiedUserIconContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
});
