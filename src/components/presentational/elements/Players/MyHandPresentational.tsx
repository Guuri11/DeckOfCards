import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CARD} from '../../../../utils/cards/cards';
import Card from '../../../container/elements/Card';

type Props = {
  cards: Array<CARD>;
};

export default function MyHandPresentational({cards}: Props) {
  return (
    <View style={styles.block}>
      {cards.map((card, idx) => {
        return (
          <Card card={card} cardsLength={cards.length} key={idx} idx={idx} />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    position: 'absolute',
    bottom: 100,
  },
});
