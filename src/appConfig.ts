import { Config } from 'react-native-config';

export const env = Config.ENV;
export const iosHost = Config.IOS_HOST;
export const androidHost = Config.ANDROID_HOST;
export const apiUrl = Config.API_HOST;

console.log(Config.ENV);
console.log(Config.IOS_HOST);
console.log(Config.ANDROID_HOST);
console.log(Config.API_HOST);
