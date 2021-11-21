import React from 'react';
import {View, Text, Button} from 'react-native';
import {ScreenProps} from '../../navigation/Navigation';

export default function JoinGamePresentational({
  goBack,
  navigate,
}: ScreenProps) {
  return (
    <View>
      <Text>Join Game</Text>
      <Button title="Go back" onPress={() => goBack()} />
      <Button title="Home" onPress={() => navigate('HOME')} />
      <Button title="Create Game" onPress={() => navigate('CREATE_GAME')} />
      <Button title="Room Game" onPress={() => navigate('ROOM_GAME')} />
      <Button title="Sign in" onPress={() => navigate('SIGN_IN')} />
      <Button title="Sign up" onPress={() => navigate('SIGN_UP')} />
    </View>
  );
}
