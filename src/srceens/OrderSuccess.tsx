import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';

import {SPORTB_COLORS} from '../constants/colors';
import {MainDrawerParamList} from '../navigation/Navigation';

import {Screen} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {clearCart, selectCartItems} from '../store/slices/cartSlice';
import {useCallback, useLayoutEffect, useState} from 'react';
import RNQRGenerator from 'rn-qr-generator';

export const OrderSuccess = ({
  navigation,
}: DrawerScreenProps<MainDrawerParamList>) => {
  const [imageUri, setImageUri] = useState('');

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const handleBackNavigation = useCallback(() => {
    navigation.navigate('Menu');
    dispatch(clearCart());
  }, [dispatch, navigation]);

  useLayoutEffect(() => {
    RNQRGenerator.generate({
      value: JSON.stringify(cartItems),
      height: 145,
      width: 145,
      correctionLevel: 'H',
      backgroundColor: SPORTB_COLORS.main,
      color: SPORTB_COLORS.white,
      padding: {top: 12, right: 12, bottom: 12, left: 12},
    })
      .then(response => setImageUri(response.uri))
      .catch(error => console.error('Cannot create QR code', error));
  }, [navigation, handleBackNavigation, cartItems]);

  return (
    <Screen containerStyle={styles.screenContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Благодарим за заказ!</Text>
        {imageUri && <Image source={{uri: imageUri}} style={styles.qrCode} />}
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.reserveButton}
          onPress={handleBackNavigation}>
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
  qrCode: {
    width: 145,
    height: 145,
    borderRadius: 6,
  },
});
