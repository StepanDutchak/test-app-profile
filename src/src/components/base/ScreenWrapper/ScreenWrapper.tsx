import React from 'react';
import {ScrollView, View, SafeAreaView} from 'react-native';

import ScreenHeader from './ui/ScreenHeader/ScreenHeader';

import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import themes from 'theme/colors';

interface ScreenWrapperProp {
  children: React.ReactNode;
  isScrollable?: boolean;
  contentStyle?: object;
  headerTitle?: string;
  additionalHeaderIcon?: () => React.ReactNode;
  isHeader?: boolean;
  containerStyle?: object;
  isGoBack?: boolean;
}

const ScreenWrapper = ({
  children,
  isScrollable,
  contentStyle,
  containerStyle,
  headerTitle,
  additionalHeaderIcon,
  isHeader = true,
  isGoBack,
}: ScreenWrapperProp) => {
  const Container = isScrollable ? ScrollView : View;

  return (
    <LinearGradient
      colors={themes.light.gradient.main}
      style={styles.linearGradient}>
      <SafeAreaView style={styles.container}>
        <Container
          contentContainerStyle={[containerStyle]}
          style={[styles.content, contentStyle]}
          showsVerticalScrollIndicator={false}>
          {isHeader && (
            <ScreenHeader
              isGoBack={isGoBack}
              additionalHeaderIcon={additionalHeaderIcon}
              title={headerTitle}
            />
          )}
          <View>{children}</View>
        </Container>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ScreenWrapper;
