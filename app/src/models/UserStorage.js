"use strict";

class UserStorage {
  static #users = {
    id: ["amis5818", "태양", "링크웹"],
    password: ["1234", "5818", "4321"],
    name: ["태양", "태양군", "블루태양"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

export { UserStorage };
