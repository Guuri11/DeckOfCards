export type DECK_TYPES = 'Spanish';

export type DECK = {
  type: DECK_TYPES;
  groups: Array<GROUP>;
  backCard: CARD;
};

export type GROUP = {
  name: string;
  cards: Array<CARD>;
};

export type CARD = {
  value: string | null;
  image: any;
};

export const SpanishDeck: DECK = {
  type: 'Spanish',
  backCard: {
    value: null,
    image: require('../../assets/cards/Spanish-Back.png'),
  },
  groups: [
    {
      name: 'Golds',
      cards: [
        {
          value: '1',
          image: require('../../assets/cards/Spanish-Golds-1.png'),
        },
        {
          value: '2',
          image: require('../../assets/cards/Spanish-Golds-2.png'),
        },
        {
          value: '3',
          image: require('../../assets/cards/Spanish-Golds-3.png'),
        },
        {
          value: '4',
          image: require('../../assets/cards/Spanish-Golds-4.png'),
        },
        {
          value: '5',
          image: require('../../assets/cards/Spanish-Golds-5.png'),
        },
        {
          value: '6',
          image: require('../../assets/cards/Spanish-Golds-6.png'),
        },
        {
          value: '7',
          image: require('../../assets/cards/Spanish-Golds-7.png'),
        },
        {
          value: '8',
          image: require('../../assets/cards/Spanish-Golds-8.png'),
        },
        {
          value: '9',
          image: require('../../assets/cards/Spanish-Golds-9.png'),
        },
        {
          value: '10',
          image: require('../../assets/cards/Spanish-Golds-10.png'),
        },
        {
          value: '11',
          image: require('../../assets/cards/Spanish-Golds-11.png'),
        },
        {
          value: '12',
          image: require('../../assets/cards/Spanish-Golds-12.png'),
        },
      ],
    },
    {
      name: 'Swords',
      cards: [
        {
          value: '1',
          image: require('../../assets/cards/Spanish-Swords-1.png'),
        },
        {
          value: '2',
          image: require('../../assets/cards/Spanish-Swords-2.png'),
        },
        {
          value: '3',
          image: require('../../assets/cards/Spanish-Swords-3.png'),
        },
        {
          value: '4',
          image: require('../../assets/cards/Spanish-Swords-4.png'),
        },
        {
          value: '5',
          image: require('../../assets/cards/Spanish-Swords-5.png'),
        },
        {
          value: '6',
          image: require('../../assets/cards/Spanish-Swords-6.png'),
        },
        {
          value: '7',
          image: require('../../assets/cards/Spanish-Swords-7.png'),
        },
        {
          value: '8',
          image: require('../../assets/cards/Spanish-Swords-8.png'),
        },
        {
          value: '9',
          image: require('../../assets/cards/Spanish-Swords-9.png'),
        },
        {
          value: '10',
          image: require('../../assets/cards/Spanish-Swords-10.png'),
        },
        {
          value: '11',
          image: require('../../assets/cards/Spanish-Swords-11.png'),
        },
        {
          value: '12',
          image: require('../../assets/cards/Spanish-Swords-12.png'),
        },
      ],
    },
    {
      name: 'Cups',
      cards: [
        {
          value: '1',
          image: require('../../assets/cards/Spanish-Cups-1.png'),
        },
        {
          value: '2',
          image: require('../../assets/cards/Spanish-Cups-2.png'),
        },
        {
          value: '3',
          image: require('../../assets/cards/Spanish-Cups-3.png'),
        },
        {
          value: '4',
          image: require('../../assets/cards/Spanish-Cups-4.png'),
        },
        {
          value: '5',
          image: require('../../assets/cards/Spanish-Cups-5.png'),
        },
        {
          value: '6',
          image: require('../../assets/cards/Spanish-Cups-6.png'),
        },
        {
          value: '7',
          image: require('../../assets/cards/Spanish-Cups-7.png'),
        },
        {
          value: '8',
          image: require('../../assets/cards/Spanish-Cups-8.png'),
        },
        {
          value: '9',
          image: require('../../assets/cards/Spanish-Cups-9.png'),
        },
        {
          value: '10',
          image: require('../../assets/cards/Spanish-Cups-10.png'),
        },
        {
          value: '11',
          image: require('../../assets/cards/Spanish-Cups-11.png'),
        },
        {
          value: '12',
          image: require('../../assets/cards/Spanish-Cups-12.png'),
        },
      ],
    },
    {
      name: 'Wands',
      cards: [
        {
          value: '1',
          image: require('../../assets/cards/Spanish-Wands-1.png'),
        },
        {
          value: '2',
          image: require('../../assets/cards/Spanish-Wands-2.png'),
        },
        {
          value: '3',
          image: require('../../assets/cards/Spanish-Wands-3.png'),
        },
        {
          value: '4',
          image: require('../../assets/cards/Spanish-Wands-4.png'),
        },
        {
          value: '5',
          image: require('../../assets/cards/Spanish-Wands-5.png'),
        },
        {
          value: '6',
          image: require('../../assets/cards/Spanish-Wands-6.png'),
        },
        {
          value: '7',
          image: require('../../assets/cards/Spanish-Wands-7.png'),
        },
        {
          value: '8',
          image: require('../../assets/cards/Spanish-Wands-8.png'),
        },
        {
          value: '9',
          image: require('../../assets/cards/Spanish-Wands-9.png'),
        },
        {
          value: '10',
          image: require('../../assets/cards/Spanish-Wands-10.png'),
        },
        {
          value: '11',
          image: require('../../assets/cards/Spanish-Wands-11.png'),
        },
        {
          value: '12',
          image: require('../../assets/cards/Spanish-Wands-12.png'),
        },
      ],
    },
  ],
};
