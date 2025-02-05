import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useCallback, useMemo} from 'react';
import {Screen} from '../components';
import {DISHES} from '../constants/sportBarData';
import {SPORTB_COLORS} from '../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItem,
  removeItem,
  selectCartItems,
  selectItemById,
  selectTotalPrice,
} from '../store/slices/cartSlice';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {MainDrawerParamList} from '../navigation/Navigation';

const SportBCartCard = ({item}: {item: (typeof DISHES)[0]}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectItemById(item.id));

  const handleAdd = () => {
    dispatch(addItem({id: item.id, price: item.price}));
  };

  const handleRemove = () => {
    dispatch(removeItem({id: item.id, price: item.price}));
  };
  return (
    <View style={styles.itemContainer}>
      <Image src={item.img} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{item.price}</Text>
        </View>
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={handleRemove}>
            <Text style={styles.counterText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.counterText}>{cartItem?.quantity}</Text>
          <TouchableOpacity onPress={handleAdd}>
            <Text style={styles.counterText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const CartScreen = ({
  navigation,
}: DrawerScreenProps<MainDrawerParamList>) => {
  const cartData = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

  const renderItem = useCallback(({item}: {item: (typeof DISHES)[0]}) => {
    return <SportBCartCard item={item} />;
  }, []);

  const filteredData = useMemo(() => {
    return DISHES.filter(item =>
      cartData.some(cartItem => cartItem.id === item.id),
    ).map(item => {
      const cartItem = cartData.find(itemInCart => itemInCart.id === item.id);

      return {
        ...item,
        quantity: cartItem?.quantity || 0,
      };
    });
  }, [cartData]);

  return (
    <Screen containerStyle={styles.screenContainer}>
      <FlatList
        data={filteredData}
        style={styles.flatList}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>В КОРЗИНЕ ПУСТО...</Text>
        )}
        contentContainerStyle={styles.listContainer}
        renderItem={renderItem}
      />
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.reserveButton}
          onPress={() =>
            totalPrice
              ? navigation.navigate('OrderSuccess')
              : navigation.navigate('Menu')
          }>
          <Text style={styles.reserveText}>
            {totalPrice ? `ЗАКАЗАТЬ ${totalPrice}$` : 'ЗАКАЗАТЬ'}
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    paddingBottom: 20,
  },
  flatList: {
    marginTop: 16,
  },
  listContainer: {
    paddingHorizontal: 32,
    gap: 46,
  },
  itemContainer: {
    gap: 4,
  },
  image: {
    height: 144,
    borderRadius: 6,
    resizeMode: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 18,
  },
  description: {
    fontSize: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  priceContainer: {
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderWidth: 2,
    borderColor: SPORTB_COLORS.main,
    minWidth: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceText: {
    fontWeight: '800',
    fontSize: 18,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  counterText: {
    fontSize: 28,
    fontWeight: '800',
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 12,
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
  emptyText: {
    marginTop: 100,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '800',
  },
});
