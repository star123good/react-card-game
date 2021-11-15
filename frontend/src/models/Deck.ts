import Card from './Card';

/**
 * Deck with 52 cards
 */
class Deck {
  private cards: Card[];
  private left: number;
  private aces: number;

  public constructor() {
    this.cards = [];

    for (let i = 0; i < 4; i = i + 1) {
      for (let j = 1; j <= 13; j = j + 1) {
        this.cards.push(new Card(j, i));
      }
    }

    this.left = this.cards.length;
    this.aces = 4;
  }

  /**
   * get left count of cards
   * @returns {Number}
   */
  public get cardsLeft(): number {
    return this.left;
  }

  /**
   * get last two cards
   * @returns {Array}
   */
  public get lastCards(): Card[] {
    return [this.cards[0], this.cards[1]];
  }

  /**
   * get left count of Ace cards
   * @returns {Number}
   */
  public get aceLeft(): number {
    return this.aces;
  }

  /**
   * shuffle the cards
   */
  public shuffle(): void {
    for (let i = 0; i < this.cards.length; i = i + 1) {
      const j = Math.floor(Math.random() * i);
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }

    this.left = this.cards.length;
    this.aces = 4;
  }

  /**
   * deal cards
   * @returns {Array}
   */
  public deal(): Card[] {
    let counts = 0;
    if (this.left > 5) {
      counts = 5;
      this.aces =
        this.aces -
        this.cards.slice(this.left - counts, this.left).reduce((s, c) => {
          if (c.rank === 1) s = s + 1;
          return s;
        }, 0);
    } else if (this.left > 0) counts = this.left;
    this.left = this.left - counts;
    const dealCards = this.cards.slice(this.left, this.left + counts);
    return dealCards;
  }

  /**
   * check if it's winner
   * @returns {Boolean}
   */
  public isWinner(): boolean {
    return this.left === 0 && this.aces > 0;
  }

  /**
   * check if it's loser
   * @returns {Boolean}
   */
  public isLoser(): boolean {
    return this.left === 0 && this.aces === 0;
  }
}

export default Deck;
