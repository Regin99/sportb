import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';

import {SPORTB_COLORS} from '../constants/colors';
import {MainDrawerParamList} from '../navigation/Navigation';

import {Screen} from '../components';
import chief from '../assets/images/chief/chief.png';

export const BookingSuccessScreen = ({
  navigation,
}: DrawerScreenProps<MainDrawerParamList>) => {
  return (
    <Screen containerStyle={styles.screenContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>СТОЛИК ЗАРЕЗЕРВИРОВАН!</Text>
        <Image source={chief} />
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.reserveButton}
          onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.reserveText}>На главную</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  contentContainer: {
    flex: 1,
    marginTop: 100,
    gap: 65,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: '800',
    color: SPORTB_COLORS.main,
    textAlign: 'center',
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 20,
  },
  reserveButton: {
    backgroundColor: SPORTB_COLORS.main,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  reserveText: {
    fontSize: 18,
    fontWeight: '800',
  },
});
