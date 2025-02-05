import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {
  BarMenu,
  BookingSuccessScreen,
  CartScreen,
  Event1,
  Event2,
  Event3,
  EventsScreen,
  MainScreen,
  OrderSuccess,
  SportBBooking,
  SportBContacts,
  TranslationsScreen,
} from '../srceens';
import {createStackNavigator} from '@react-navigation/stack';

export type MainDrawerParamList = {
  Menu: undefined;
  Translations: undefined;
  Cart: undefined;
  Contacts: undefined;
  Booking: undefined;
  BookingSuccess: undefined;
  OrderSuccess: undefined;
};

const RootStack = createStackNavigator();

const MainDrawerNavigator = createDrawerNavigator<MainDrawerParamList>();

const EventsDrawerNavigator = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <MainDrawerNavigator.Navigator
      drawerContent={props => <MainScreen {...props} />}
      defaultStatus="open"
      screenOptions={{
        headerShown: false,
        drawerStyle: {width: '100%'},
        overlayColor: 'transparent',
      }}>
      <MainDrawerNavigator.Screen name="Menu" component={BarMenu} />
      <MainDrawerNavigator.Screen
        name="Translations"
        component={TranslationsScreen}
      />
      <MainDrawerNavigator.Screen name="Cart" component={CartScreen} />
      <MainDrawerNavigator.Screen name="Contacts" component={SportBContacts} />
      <MainDrawerNavigator.Screen name="Booking" component={SportBBooking} />
      <MainDrawerNavigator.Screen
        name="BookingSuccess"
        component={BookingSuccessScreen}
      />
      <MainDrawerNavigator.Screen
        name="OrderSuccess"
        component={OrderSuccess}
      />
    </MainDrawerNavigator.Navigator>
  );
};

const EventsDrawer = () => {
  return (
    <EventsDrawerNavigator.Navigator
      defaultStatus="open"
      drawerContent={props => <EventsScreen {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {width: '100%'},
        overlayColor: 'transparent',
      }}>
      <EventsDrawerNavigator.Screen name="Event1" component={Event1} />
      <EventsDrawerNavigator.Screen name="Event2" component={Event2} />
      <EventsDrawerNavigator.Screen name="Event3" component={Event3} />
    </EventsDrawerNavigator.Navigator>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="MainDrawer" component={MainDrawer} />
        <RootStack.Screen name="EventsDrawer" component={EventsDrawer} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
