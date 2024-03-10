import React from 'react';
import {View, Image} from 'react-native';
import MockUserImage from '../../../assets/images/profile/userImage.png';
import {styles} from './styles';
import VerifiedIcon from 'assets/icons/VerifiedIcon';

interface IUserImageBlock {
  containerStyle?: object;
}
const UserImageBlock = ({containerStyle}: IUserImageBlock) => {
  const renderVerifiedUserIcon = () => {
    return (
      <View style={styles.verifiedUserIconContainer}>
        <VerifiedIcon />
      </View>
    );
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {renderVerifiedUserIcon()}
      <Image resizeMode="center" source={MockUserImage} />
    </View>
  );
};
export default React.memo(UserImageBlock);
