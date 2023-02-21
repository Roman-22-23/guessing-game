class GuessingGame {
  constructor() {}

  #min;
  #max;
  #rezult;

  setRange(min, max) {
    this.#min = min;
    this.#max = max;
  }

  guess() {
    this.#rezult = Math.round((this.#max-this.#min)/2 + this.#min);
    return this.#rezult;
  }

  lower() {
    this.#max = this.#rezult;
  }

  greater() {
    this.#min = this.#rezult;
  }
}

module.exports = GuessingGame;
