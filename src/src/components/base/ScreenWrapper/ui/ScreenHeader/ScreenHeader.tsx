import React from 'react';
import {styles} from './styles';
import {Text, View} from 'react-native';
import BackIcon from 'assets/icons/BackIcon';
import AnimatedPress from 'components/base/AnimatedPress';

interface IScreenHeader {
  title?: string;
  additionalHeaderIcon?: () => React.ReactNode;
  isGoBack?: boolean;
}

const ScreenHeader = ({
  title,
  additionalHeaderIcon,
  isGoBack,
}: IScreenHeader) => (
  <View style={styles.container}>
    {isGoBack && (
      <AnimatedPress style={styles.leftContent}>
        <BackIcon />
      </AnimatedPress>
    )}
    <Text style={styles.headerTitle}>{title}</Text>
    <View style={styles.rightContent}>
      {additionalHeaderIcon && additionalHeaderIcon()}
    </View>
  </View>
);

export default React.memo(ScreenHeader);
