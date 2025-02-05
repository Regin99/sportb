import {FlatList, StyleSheet, Text, View} from 'react-native';

import {TRANSLATIONS} from '../constants/sportBarData';
import {SPORTB_COLORS} from '../constants/colors';

import {Screen} from '../components';

export const TranslationsScreen = () => (
  <Screen>
    <Text style={styles.headerText}>Спортивные трансляции</Text>
    <FlatList
      contentContainerStyle={styles.flatListContent}
      data={TRANSLATIONS}
      renderItem={({item}: {item: (typeof TRANSLATIONS)[0]}) => (
        <View style={styles.translationItem}>
          <View style={styles.abbreviationContainer}>
            <Text style={styles.abbreviationText}>{item.abbreviation}</Text>
          </View>
          <View style={styles.translationDetails}>
            <Text style={styles.translationText}>{item.title}</Text>
            <Text style={styles.translationText}>{item.place}</Text>
            <Text style={styles.translationTime}>{item.time}</Text>
          </View>
        </View>
      )}
    />
  </Screen>
);

const styles = StyleSheet.create({
  headerText: {
    marginVertical: 20,
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: '800',
  },
  flatListContent: {
    gap: 32,
    paddingHorizontal: 20,
  },
  translationItem: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  abbreviationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    width: 104,
    paddingVertical: 2,
    backgroundColor: SPORTB_COLORS.secondary,
  },
  abbreviationText: {
    fontSize: 26,
    fontWeight: '800',
  },
  translationDetails: {
    gap: 2,
  },
  translationText: {
    fontSize: 14,
  },
  translationTime: {
    fontSize: 10,
  },
});
