import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import logo from '../assets/images/sportbLogo/sportbLogo.png';
import {SPORTB_COLORS} from '../constants/colors';

import {SportBCartIcon} from '../components/icons';

const MENU_OPTIONS = [
  {
    id: 1,
    title: 'Главная',
    route: 'Menu',
  },
  {
    id: 2,
    title: 'Корзина',
    route: 'Cart',
  },
  {
    id: 3,
    title: 'Трансляции',
    route: 'Translations',
  },
  {
    id: 4,
    title: 'Контакты',
    route: 'Contacts',
  },
  {
    id: 5,
    title: 'Резерв столика',
    route: 'Booking',
  },
  {
    id: 6,
    title: 'События',
    route: 'EventsDrawer',
  },
];

export const MainScreen = ({
  navigation,
  state,
}: DrawerContentComponentProps) => {
  const currentRouteName = state?.routes[state.index].name;
  const {top} = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <View style={styles.logoContainer}>
        <Image source={logo} resizeMode="contain" style={styles.logo} />
      </View>
      <FlatList
        data={MENU_OPTIONS}
        style={styles.flatList}
        contentContainerStyle={styles.flatListContent}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              item.route && currentRouteName === item.route
                ? navigation.closeDrawer()
                : item.route && navigation.navigate(item.route)
            }
            style={[
              styles.menuItem,
              currentRouteName === item.route && styles.activeMenuItem,
            ]}>
            <Text style={styles.menuItemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.cartContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <SportBCartIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 24,
    backgroundColor: SPORTB_COLORS.secondaryBackground,
  },
  logoContainer: {
    backgroundColor: SPORTB_COLORS.main,
    height: 100,
    padding: 16,
    marginBottom: 24,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  flatList: {
    flex: 1,
  },
  flatListContent: {
    gap: 24,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  menuItem: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: SPORTB_COLORS.main,
    height: 52,
    minWidth: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeMenuItem: {
    backgroundColor: SPORTB_COLORS.main,
  },
  menuItemText: {
    fontSize: 24,
    color: SPORTB_COLORS.white,
    fontWeight: '700',
  },
  cartContainer: {
    alignItems: 'center',
  },
});
