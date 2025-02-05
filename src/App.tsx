import {Navigation} from './navigation/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SPORTB_COLORS} from './constants/colors';
import {Provider} from 'react-redux';
import {store} from './store/store';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider
      style={{backgroundColor: SPORTB_COLORS.secondaryBackground}}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
