import React from 'react';
import {View, Text, Button} from 'react-native';
import {ScreenProps} from '../../navigation/Navigation';

export default function RoomGamePresentational({
  goBack,
  navigate,
}: ScreenProps) {
  return (
    <View>
      <Text>Room Game</Text>
      <Button title="Go back" onPress={() => goBack()} />
      <Button title="Home" onPress={() => navigate('HOME')} />
      <Button title="Create Game" onPress={() => navigate('CREATE_GAME')} />
      <Button title="Join Game" onPress={() => navigate('JOIN_GAME')} />
      <Button title="Sign in" onPress={() => navigate('SIGN_IN')} />
      <Button title="Sign up" onPress={() => navigate('SIGN_UP')} />
    </View>
  );
}
