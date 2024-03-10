import React, {useCallback, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';

import {ScreenNavigationEnums} from '../../constants/enums/navigation';

import {ScreenWrapper} from '@components';
import {LoadingScreenNavigationProp} from '@types';

import {styles} from './styles';

type ILoadingScreen = {
  navigation: LoadingScreenNavigationProp;
};

const LoadingScreen: React.FC<ILoadingScreen> = ({navigation}) => {
  const preFetchData = useCallback(async () => {
    try {
      navigation.navigate(ScreenNavigationEnums.PROFILE_SCREEN);
    } catch (err) {
      console.error(err);
    }
  }, [navigation]);

  useEffect(() => {
    setTimeout(() => {
      preFetchData();
    }, 3000);
  }, [preFetchData]);

  return (
    <ScreenWrapper
      containerStyle={styles.container}
      isHeader={false}
      isScrollable>
      <ActivityIndicator />
    </ScreenWrapper>
  );
};

export default LoadingScreen;
