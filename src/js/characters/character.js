const types = ["Bowman", "Swordsman", "Wizard", "Undead", "Zombie", "Daemon"];

export default class Character {
  constructor(name, type) {
    if (typeof name !== "string") {
      throw new Error("The name should a string");
    }

    if (name.length < 2) {
      throw new Error("The name should be at least 2 characters long");
    }

    if (name.length > 10) {
      throw new Error("The name should be no more than 10 characters long");
    }

    if (!types.includes(type)) {
      throw new Error("Unknown character type");
    }

    this.name = name;
    this.type = type;

    this.health = 100;
    this.level = 1;

    this.attack = null;
    this.defense = null;
  }
}
