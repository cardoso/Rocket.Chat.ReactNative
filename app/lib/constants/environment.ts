import Constants from 'expo-constants';
import { Platform } from 'react-native';


export const isFDroidBuild: boolean = Platform.OS === 'android' && !!Constants.expoConfig?.extra?.isFDroidBuild;

export const isOfficial: boolean = !__DEV__;
