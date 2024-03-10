import React, {useCallback, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {AnimatedPress, ScreenWrapper} from '@components';

import ThreeDots from 'assets/icons/ThreeDots';

import TopSection from './ui/TopSection/TopSection';

import MediumSection from './ui/MediumSection/MediumSection';

import {fetchUserData} from '@fetch';
import {setUser} from 'store/slices/userSlice';

import {styles} from './styles';
import {View} from 'react-native';
import AdventuresSection from './ui/AdventuresSection/AdventuresSection';

interface IHomeScreen {}

const ProfileScreen = ({}: IHomeScreen) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUserData();
        dispatch(setUser({user: userData}));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const renderAdditionalPageIcon = useCallback(() => {
    return (
      <AnimatedPress style={styles.additionalHeaderIcon}>
        <ThreeDots />
      </AnimatedPress>
    );
  }, []);
  return (
    <ScreenWrapper
      additionalHeaderIcon={renderAdditionalPageIcon}
      isGoBack
      isScrollable>
      <TopSection containerStyle={styles.containerTopSection} />
      <View style={styles.divider} />
      <MediumSection />
      <AdventuresSection containerStyle={styles.adventuresSection} />
    </ScreenWrapper>
  );
};

export default ProfileScreen;
