import React from 'react';
import {SvgProps} from 'react-native-svg';

export interface IGeneralUserConfig {
  id: number;
  title: string;
  icon: React.ComponentType<SvgProps>;
  customTextStyle: object;
}
