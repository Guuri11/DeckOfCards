import React from 'react';
import {ScreenProps} from '../../navigation/Navigation';
import HomePresentational from '../../presentational/pages/HomePresentational';

export default function Home({goBack, params, navigate}: ScreenProps) {
  return <HomePresentational goBack={goBack} navigate={navigate} />;
}
