import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useCallback, useMemo, useState} from 'react';

import {CATEGORIES, DISHES} from '../constants/sportBarData';
import {SPORTB_COLORS} from '../constants/colors';

import {MenuOptions, Screen} from '../components';
import {useDispatch} from 'react-redux';
import {addItem} from '../store/slices/cartSlice';

const MenuCard = ({item}: {item: (typeof DISHES)[0]}) => {
  const dispatch = useDispatch();

  const handleAdd = () => dispatch(addItem({id: item.id, price: item.price}));

  return (
    <View style={styles.itemContainer}>
      <Image src={item.img} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buyButton} onPress={handleAdd}>
          <Text style={styles.buyText}>Купить </Text>
        </TouchableOpacity>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{item.price}</Text>
        </View>
      </View>
    </View>
  );
};

export const BarMenu = () => {
  const [category, setCategory] = useState(CATEGORIES[0].title);

  const filteredData = useMemo(() => {
    return DISHES.filter(item => item.category === category);
  }, [category]);

  const renderItem = useCallback(
    ({item}: {item: (typeof DISHES)[0]}) => <MenuCard item={item} />,
    [],
  );

  return (
    <Screen>
      <MenuOptions
        active={category}
        setActive={setCategory}
        containerStyle={styles.menuOptions}
      />
      <FlatList
        data={filteredData}
        style={styles.flatList}
        contentContainerStyle={styles.listContainer}
        renderItem={renderItem}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  menuOptions: {
    marginTop: 24,
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
  buyButton: {
    backgroundColor: SPORTB_COLORS.main,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 75,
  },
  buyText: {
    fontWeight: '800',
    fontSize: 16,
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
});
