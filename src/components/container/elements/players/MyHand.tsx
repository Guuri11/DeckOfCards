import React from 'react';
import MyHandPresentational from '../../../presentational/elements/Players/MyHandPresentational';
import {CARD} from '../../../../utils/cards/cards';

type Props = {
  cards: Array<CARD>;
};

export default function MyHand({cards}: Props) {
  return <MyHandPresentational cards={cards} />;
}
