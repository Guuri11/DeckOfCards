import React from 'react';
import {CARD} from '../../../utils/cards/cards';
import CardPresentational from '../../presentational/elements/CardPresentational';

type Props = {
  card: CARD;
  idx: number;
  cardsLength: number;
};
export default function Card({card, idx, cardsLength}: Props) {
  return <CardPresentational card={card} cardsLength={cardsLength} idx={idx} />;
}
