import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {BackIcon} from './icons';

export const EventTemplate = ({image}: {image: ImageSourcePropType}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <ImageBackground source={image} style={styles.background}>
      <TouchableOpacity
        style={[styles.backButton, {paddingTop: top}]}
        onPress={() => navigation.goBack()}>
        <BackIcon />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    left: -2,
  },
  backButton: {
    paddingHorizontal: 24,
  },
});
