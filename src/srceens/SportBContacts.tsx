import {ScrollView, StyleSheet, Text, TextInput} from 'react-native';

import {SPORTB_COLORS} from '../constants/colors';

import {Screen} from '../components';

export const SportBContacts = () => {
  return (
    <Screen containerStyle={styles.screenContainer}>
      <Text style={styles.headerText}>Контакты</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TextInput
          value="Номер телефона"
          style={styles.input}
          editable={false}
        />
        <TextInput value="Город" style={styles.input} editable={false} />
        <TextInput value="Индекс" style={styles.input} editable={false} />
        <TextInput value="Страна" style={styles.input} editable={false} />
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 20,
  },
  headerText: {
    marginVertical: 20,
    fontSize: 18,
    fontWeight: '800',
  },
  scrollContainer: {
    gap: 20,
  },
  input: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: SPORTB_COLORS.main,
    backgroundColor: SPORTB_COLORS.white,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 10,
    fontWeight: '300',
  },
});
