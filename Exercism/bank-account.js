//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.money = 0;
    this.online = false;
  }

  open() {
    if (this.online === false) {
      this.online = true;
    }
  }

  close() {
    if (this.online === true) {
      this.online = false;
      this.money = 0;
    }
  }

  deposit(cash) {
    if (this.online === true && cash > 0) {
      this.money += cash;
    }
  }

  withdraw() {
    if (this.online === true && cash > 0 && this.money >= cash) {
      this.money -= cash;
    }
  }

  get balance() {
    if (this.online === true) {
      return this.money;
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
