import React, {useMemo, useState} from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectUser} from 'store/selectors/userSelector';
import {styles} from './styles';
import {adventuresData, sliderTabs} from './config';
import {AnimatedPress} from '@components';
import StarIcon from 'assets/icons/StarIcon';
import RightIcon from 'assets/icons/RightIcon';
import LikedIcon from 'assets/icons/LikedIcon';
import LikeSaved from 'assets/icons/LikeSaved';

interface IAdventuresSection {
  containerStyle: object;
}

const mockMonth = 'December';

const AdventuresSection = ({containerStyle}: IAdventuresSection) => {
  const user = useSelector(selectUser);

  const [selectedTab, setSelectedTab] = useState(0);

  const [selectedTypeContent, setSelectedTypeContent] = useState('Listed');

  const [savedAdventures, setSavedAdventures] = useState(0);

  const handlePressTab = (type, index) => {
    setSelectedTab(index);
    setSelectedTypeContent(type);
  };

  const validatedData = useMemo(() => {
    const contentData = adventuresData.filter(
      itemData => itemData.type === selectedTypeContent,
    );
    return contentData;
  }, [selectedTypeContent]);

  const renderTab = (item, index) => {
    return (
      <AnimatedPress
        key={item.id}
        onPress={() => handlePressTab(item.type, index)}
        style={[styles.tabContainer, item.id !== 1 && styles.extraSpace]}>
        <Text style={styles.tabTitle}>{item.title}</Text>
        {index === selectedTab && <View style={styles.tabLine} />}
      </AnimatedPress>
    );
  };

  const renderSectionSlider = () => {
    return (
      <View style={styles.sliderContainer}>{sliderTabs.map(renderTab)}</View>
    );
  };

  const renderFullLocation = (locationFrom, locationTo) => {
    return (
      <View style={styles.fullLocationContainer}>
        <Text style={styles.locationFromTitle}>{locationFrom}</Text>
        <RightIcon />
        <Text style={styles.locationToTitle}>{locationTo}</Text>
      </View>
    );
  };

  const renderLikedAdventures = index => {
    return (
      <View>
        {savedAdventures !== index ? (
          <AnimatedPress onPress={() => setSavedAdventures(index)}>
            <LikedIcon />
          </AnimatedPress>
        ) : (
          <AnimatedPress onPress={() => setSavedAdventures(index)}>
            <LikeSaved />
          </AnimatedPress>
        )}
      </View>
    );
  };

  const renderSliderContent = (itemContent, index) => {
    return (
      <View key={itemContent.id} style={index !== 0 && styles.extraMargin}>
        <View style={styles.sliderContentContainer}>
          <ImageBackground source={itemContent.image} style={styles.imageBG}>
            {renderLikedAdventures(index)}
          </ImageBackground>
        </View>
        <View style={styles.descriptionContainer}>
          <View style={styles.reviewContainer}>
            <StarIcon />
            <Text style={styles.reviewTitle}>{itemContent.rating}</Text>
            <Text style={styles.dateTitle}>{itemContent.time}</Text>
          </View>
          <Text style={styles.mainTitle}>{itemContent.title}</Text>
          <View>
            {itemContent?.locationFrom ? (
              renderFullLocation(
                itemContent.locationFrom,
                itemContent?.locationTo,
              )
            ) : (
              <Text style={styles.locationTitle}>{itemContent?.location}</Text>
            )}
          </View>
          <Text style={styles.priceTitle}>{itemContent.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={[containerStyle]}>
      <Text style={styles.sectionTitle}>{`${user?.name} Adventures`} </Text>
      {renderSectionSlider()}
      <View style={styles.mainContentScroll}>
        <Text style={styles.adventuresMonthTitle}>{mockMonth}</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {validatedData.map(renderSliderContent)}
        </ScrollView>
      </View>
    </View>
  );
};
export default React.memo(AdventuresSection);
