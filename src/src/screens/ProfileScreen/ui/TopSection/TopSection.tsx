import UserImageBlock from 'components/ui/UserImageBlock/UserImageBlock';
import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {selectUser} from 'store/selectors/userSelector';
import StarIcon from 'assets/icons/StarIcon';
import {text} from 'locale/en';
import CustomButton from 'components/ui/CustomButton';

interface ITopSection {
  containerStyle: object;
}

const TopSection = ({containerStyle}: ITopSection) => {
  const user = useSelector(selectUser);

  const renderUserImageBlock = () => {
    return <UserImageBlock />;
  };

  const renderUserTitleBlock = useCallback(() => {
    return (
      <View style={styles.titleUserContainer}>
        <Text style={styles.nameTitle}>{user?.fullName}</Text>
        <View style={styles.ratingContainer}>
          <StarIcon />
          <Text style={styles.ratingTitle}>{user?.rating}</Text>
          <Text
            style={
              styles.reviewsTitle
            }>{`(${user?.reviews} ${text.userReviewSubtitle})`}</Text>
        </View>

        <View style={styles.followersContainer}>
          <Text
            style={
              styles.followersTitle
            }>{`${user?.followers}  ${text.userFollowersSubtitle}`}</Text>
          <Text
            style={
              styles.followingTitle
            }>{`${user?.following}  ${text.userFollowingSubtitle}`}</Text>
        </View>
      </View>
    );
  }, [user]);

  const renderButtonBlock = () => {
    return (
      <View style={styles.containerButtonBlock}>
        <CustomButton title="Following" />
        <CustomButton title="Message" />
      </View>
    );
  };

  const renderGeneralUserTitle = () => {
    return (
      <View style={styles.containerGeneralUserTitle}>
        <Text style={styles.generalUserTitle}>
          I am an Experience Designer with a deep passion for travel around the
          world, cars, trains, snowboarding and luxury yachts
        </Text>
      </View>
    );
  };

  return (
    <View style={[containerStyle]}>
      {renderUserImageBlock()}
      {renderUserTitleBlock()}
      {renderButtonBlock()}
      {renderGeneralUserTitle()}
    </View>
  );
};

export default React.memo(TopSection);
