import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ScreenNavigationEnums} from '../constants/enums/navigation';

export type ScreenRouteProp = {
  navigate: (SCREEN: string, items?: object) => void;
  goBack: () => void;
};

export type RootStackParamList = {
  [ScreenNavigationEnums.LOADING_SCREEN]: undefined;
  [ScreenNavigationEnums.PROFILE_SCREEN]: undefined;
};

export type LoadingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNavigationEnums.LOADING_SCREEN
>;
