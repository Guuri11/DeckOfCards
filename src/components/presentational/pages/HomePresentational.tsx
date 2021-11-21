import React from 'react';
import {View, Text, Button} from 'react-native';
import {ScreenProps} from '../../navigation/Navigation';

export default function HomePresentational({goBack, navigate}: ScreenProps) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Go back" onPress={() => goBack()} />
      <Button title="Create game" onPress={() => navigate('CREATE_GAME')} />
      <Button title="Join Game" onPress={() => navigate('JOIN_GAME')} />
      <Button title="Room Game" onPress={() => navigate('ROOM_GAME')} />
      <Button title="Sign in" onPress={() => navigate('SIGN_IN')} />
      <Button title="Sign up" onPress={() => navigate('SIGN_UP')} />
    </View>
  );
}
