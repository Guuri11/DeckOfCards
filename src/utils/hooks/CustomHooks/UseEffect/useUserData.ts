import AsyncStorage from '@react-native-community/async-storage';
import {useState, useEffect} from 'react';

export const useUserData = () => {
  const [user, setUser] = useState({name: ''});
  useEffect(() => {
    AsyncStorage.getItem('user').then(user_store => {
      if (user_store) {
        setUser(JSON.parse(user_store));
      }
    });
  }, [user]);

  return user;
};
