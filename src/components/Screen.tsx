import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {SPORTB_COLORS} from '../constants/colors';

import {SportBarHeader} from './SportBarHeader';

type ScreenProps = {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
};

export const Screen = ({children, containerStyle}: ScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <SportBarHeader />
      <View style={[styles.container, containerStyle]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SPORTB_COLORS.white,
  },
});
