import Card, { Suit } from 'models/Card';

describe('card_model', () => {
  const card = new Card(1, Suit.Diamonds);
  console.log(card.suitName, Suit.Diamonds, 'The suit of the card is Diamonds.');
});
