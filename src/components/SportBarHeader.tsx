import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

import {BurgerIcon, CartIcon, SportBarLogo} from './icons';
import {MainDrawerParamList} from '../navigation/Navigation';
import {useSelector} from 'react-redux';
import {selectTotalQuantity} from '../store/slices/cartSlice';
import {SPORTB_COLORS} from '../constants/colors';

export const SportBarHeader = () => {
  const navigation = useNavigation<DrawerNavigationProp<MainDrawerParamList>>();
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <BurgerIcon />
      </TouchableOpacity>
      <SportBarLogo />
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <CartIcon />
        {!!totalQuantity && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{totalQuantity}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  badgeContainer: {
    position: 'absolute',
    top: -7,
    right: -8,
    backgroundColor: SPORTB_COLORS.main,
    height: 18,
    minWidth: 18,
    paddingHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  badgeText: {
    fontSize: 10,
  },
});
