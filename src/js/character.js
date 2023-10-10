export default class Character {
  constructor(name, type) {
    const subclasses = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно содержать от 2 до 10 символов');
    } else {
      this.name = name;
    }

    if (!subclasses.includes(type)) {
      throw new Error('Неизвестное существо');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelup() {
    if (this.health <= 0) {
      throw new Error('YOU DEAD');
    }
    this.level += 1;
    this.health = 100;
    this.attack += (this.attack * 20) / 100;
    this.defence += (this.defence * 20) / 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
