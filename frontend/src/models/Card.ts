export enum Suit {
  Spades,
  Clubs,
  Hearts,
  Diamonds,
}

class Card {
  public readonly rank: number;
  public readonly suit: Suit;

  private static rankNames = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  public constructor(rank: number, suit: Suit) {
    this.rank = rank > 0 && rank <= 13 ? rank : 1;
    this.suit = suit in Suit ? suit : Suit.Diamonds;
  }

  public get rankName(): string {
    return Card.rankNames[this.rank - 1];
  }

  public get suitName(): string {
    return Suit[this.suit];
  }
}

export default Card;
