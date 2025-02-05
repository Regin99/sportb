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

import {SPORTB_COLORS} from '../constants/colors';

import {EventTemplate} from '../components';

import event1 from '../assets/images/sportBarEvent1/sportBarEvent1.png';
import event2 from '../assets/images/sportBarEvent2/sportBarEvent2.png';
import event3 from '../assets/images/sportBarEvent3/sportBarEvent3.png';
import logo from '../assets/images/sportbLogo/sportbLogo.png';

const MENU_OPTIONS = [
  {
    id: 1,
    title: 'Вечер Французской',
    route: 'Event1',
  },
  {
    id: 2,
    title: 'Джазовые Вечера',
    route: 'Event2',
  },
  {
    id: 3,
    title: 'Вино и Сыр',
    route: 'Event3',
  },
];

export const Event1 = () => <EventTemplate image={event1} />;
export const Event2 = () => <EventTemplate image={event2} />;
export const Event3 = () => <EventTemplate image={event3} />;

export const EventsScreen = ({
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
                : navigation.navigate(item.route)
            }
            style={[
              styles.menuItem,
              currentRouteName === item.route && styles.activeMenuItem,
            ]}>
            <Text style={styles.menuItemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.reset({index: 0, routes: [{name: 'MainDrawer'}]})
          }
          style={styles.mainButton}>
          <Text style={styles.menuItemText}>Вернуться на главную</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 32,
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
  buttonContainer: {
    alignItems: 'center',
  },
  mainButton: {
    borderRadius: 8,
    backgroundColor: SPORTB_COLORS.main,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
  },
});
