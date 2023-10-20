/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
export default class Team {
  constructor() {
    this.members = new Set();
    // this[Symbol.iterator] = function () {
    //   let start = 0;
    //   const end = this.members.size;

    //   return {
    //     next() {
    //       if (++start <= end) {
    //         return {
    //           value: start,
    //           done: false,
    //         };
    //       }
    //       return {
    //         done: true,
    //       };
    //     },
    //   };
    // };
    [Symbol.iterator]() {
      return this.members.values()
    };
    this.it = this.members.values();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже есть');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    for (const char of characters) {
      this.members.add(char);
    }
  }

  toArray() {
    const teamArr = [];
    this.members.forEach((member) => teamArr.push(member));
    return teamArr;
  }

  iterate() {
    return this.it.next().value;
  }
}
