import React from 'react';
import {ScreenProps} from '../../navigation/Navigation';
import SignUpPresentational from '../../presentational/pages/SignUpPresentational';

export default function SignUp({goBack, params, navigate}: ScreenProps) {
  return <SignUpPresentational goBack={goBack} navigate={navigate} />;
}
