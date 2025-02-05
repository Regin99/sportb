import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {CATEGORIES} from '../constants/sportBarData';
import {SPORTB_COLORS} from '../constants/colors';

type SegmentedControlProps = {
  active: string;
  setActive: (active: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
};

export const MenuOptions = ({
  active,
  setActive,
  containerStyle,
}: SegmentedControlProps) => (
  <View style={[styles.controlContainer, containerStyle]}>
    {CATEGORIES.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.option, active === option.title && styles.activeOption]}
        onPress={() => setActive(option.title)}>
        <Image src={option.img} style={styles.image} />
        <Text style={styles.optionText}>{option.title}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  controlContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  option: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignItems: 'center',
    maxWidth: 94,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  activeOption: {
    borderWidth: 2,
    borderRadius: 6,
    borderColor: SPORTB_COLORS.main,
  },
  optionText: {
    fontSize: 12,
    fontWeight: '800',
    textAlign: 'center',
  },
  image: {
    height: 74,
    width: 74,
    borderRadius: 40,
    marginBottom: 8,
  },
});
