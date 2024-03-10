import React from 'react';
import {Text, View} from 'react-native';

import {UserGeneralInfo} from './config';

import {styles} from './styles';

const MediumSection = () => {
  const renderRow = item => {
    return (
      <View
        key={item.id}
        style={[styles.rowContainer, item.id === 1 && styles.emptyMargin]}>
        {item?.icon()}
        <Text style={[styles.titleRow, item.customTextStyle]}>
          {item?.title}
        </Text>
      </View>
    );
  };
  return <View>{UserGeneralInfo.map(renderRow)}</View>;
};

export default React.memo(MediumSection);
