import React from 'react';
import {ScreenProps} from '../../navigation/Navigation';
import CreateGamePresentational from '../../presentational/pages/CreateGamePresentational';

export default function CreateGame({goBack, params, navigate}: ScreenProps) {
  return <CreateGamePresentational goBack={goBack} navigate={navigate} />;
}
