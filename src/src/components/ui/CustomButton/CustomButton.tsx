import React from 'react';

import {styles} from './styles';
import {Text} from 'react-native';
import AnimatedPress from 'components/base/AnimatedPress';

interface ICustomButton {
  title: string;
}

const CustomButton = ({title}: ICustomButton) => {
  return (
    <AnimatedPress style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </AnimatedPress>
  );
};

export default React.memo(CustomButton);
