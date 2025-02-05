import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {DrawerScreenProps} from '@react-navigation/drawer';

import {Screen} from '../components';

import {SPORTB_COLORS} from '../constants/colors';
import {MainDrawerParamList} from '../navigation/Navigation';

export const SportBBooking = ({
  navigation,
}: DrawerScreenProps<MainDrawerParamList>) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [table, setTable] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openTimePicker, setOpenTimePicker] = useState(false);

  const isFormValid = name && phone && table && date && time;

  return (
    <Screen containerStyle={styles.screenContainer}>
      <Text style={styles.headerText}>Резерв столика</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TextInput
          placeholder="Имя..."
          style={styles.input}
          value={name}
          placeholderTextColor={'#000'}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Номер телефона"
          style={styles.input}
          value={phone}
          placeholderTextColor={'#000'}
          onChangeText={setPhone}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Столик"
          style={styles.input}
          value={table}
          placeholderTextColor={'#000'}
          keyboardType="numeric"
          onChangeText={setTable}
        />
        <TouchableOpacity
          style={styles.input}
          onPress={() => setOpenTimePicker(true)}>
          <Text style={styles.text}>
            {time ? time.toLocaleTimeString().slice(0, 5) : 'Время'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.input}
          onPress={() => setOpenDatePicker(true)}>
          <Text style={styles.text}>
            {date ? date.toLocaleDateString() : 'Дата'}
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {isFormValid && (
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.reserveButton}
            onPress={() => navigation.navigate('BookingSuccess')}>
            <Text style={styles.reserveText}>Зарезервировать</Text>
          </TouchableOpacity>
        </View>
      )}

      <DatePicker
        modal
        open={openDatePicker}
        date={date || new Date()}
        mode="date"
        onConfirm={selectedDate => {
          setOpenDatePicker(false);
          setDate(selectedDate);
        }}
        onCancel={() => setOpenDatePicker(false)}
      />
      <DatePicker
        modal
        open={openTimePicker}
        date={time || new Date()}
        mode="time"
        onConfirm={selectedTime => {
          setOpenTimePicker(false);
          setTime(selectedTime);
        }}
        onCancel={() => setOpenTimePicker(false)}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 20,
    paddingBottom: 32,
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
    backgroundColor: SPORTB_COLORS.secondary,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    fontWeight: '300',
  },
  text: {
    fontSize: 14,
    fontWeight: '300',
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
