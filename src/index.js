import Zombie from './js/class/zombie';
import Undead from './js/class/undead';
import Swordsman from './js/class/swordman';
import Team from './js/team';

const swordman = new Swordsman('swordman');
const zombie = new Zombie('zombie');
const undead = new Undead('undead');
const team = new Team();
team.addAll(swordman, zombie, undead);
console.log(...team);

// console.log(team.iterate());
// console.log(team.iterate());
