import AsyncStorage from '@react-native-async-storage/async-storage';
import {Lock} from '../types/Lock';

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@lock_Object');
    return jsonValue != null ? (JSON.parse(jsonValue) as Lock) : null;
  } catch (e) {
    // error reading value
  }
};

const storeData = async (value: Lock) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@lock_Object', jsonValue);
  } catch (e) {
    // saving error
  }
};

const deleteData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }
};
