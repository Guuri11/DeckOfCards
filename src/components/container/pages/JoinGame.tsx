import React from 'react';
import {ScreenProps} from '../../navigation/Navigation';
import JoinGamePresentational from '../../presentational/pages/JoinGamePresentational';

export default function JoinGame({goBack, params, navigate}: ScreenProps) {
  return <JoinGamePresentational goBack={goBack} navigate={navigate} />;
}
