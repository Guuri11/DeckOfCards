import React from 'react';
import {ScreenProps} from '../../navigation/Navigation';
import SignInPresentational from '../../presentational/pages/SignInPresentational';

export default function SignIn({goBack, params, navigate}: ScreenProps) {
  return <SignInPresentational goBack={goBack} navigate={navigate} />;
}
