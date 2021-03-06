import { AppRegistry } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import { App } from './src/app/App';
import { name as appName } from './app.json';

Orientation.lockToPortrait();
AppRegistry.registerComponent(appName, () => App);
