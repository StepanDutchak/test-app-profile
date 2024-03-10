import React from 'react';

import {styles} from './styles';
import {View} from 'react-native';

const LockBlurBlock = () => {
  return (
    <View style={styles.container}>
      <View style={styles.lockContainer}>
        <View style={styles.blur} />
      </View>
    </View>
  );
};

export default React.memo(LockBlurBlock);
