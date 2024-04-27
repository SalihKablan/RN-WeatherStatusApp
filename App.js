import Router from './src/Router.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{width:'100%',height:'100%',flex:1}}>
    <SafeAreaProvider>
    <Router/>
    </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
