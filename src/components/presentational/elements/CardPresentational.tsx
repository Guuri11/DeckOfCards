import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {CARD} from '../../../utils/cards/cards';

type Props = {
  card: CARD;
  idx: number;
  cardsLength: number;
};
export default function CardPresentational({card, idx, cardsLength}: Props) {
  const getIndentWidth = () => {
    if (idx === 0) {
      return 0;
    }

    let itemsWidth = cardsLength * 100;
    let diff = Dimensions.get('window').width - 100 - itemsWidth;

    return diff / cardsLength;
  };

  const getCardWrapperStyle = () => {
    const marginLeft = getIndentWidth();

    return {
      marginLeft: marginLeft,
    };
  };
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={getCardWrapperStyle()}>
        <Image
          resizeMode={'contain'}
          style={styles.imageWidth}
          source={card.image}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageWidth: {width: 100},
});
