import React from 'react';
import {ScreenProps} from '../../navigation/Navigation';
import RoomGamePresentational from '../../presentational/pages/RoomGamePresentational';

export default function RoomGame({goBack, params, navigate}: ScreenProps) {
  return <RoomGamePresentational goBack={goBack} navigate={navigate} />;
}
