const metasim = require('../Damage Calculator/Functions/functions')


const ironsword = {
    NAME: 'Iron Sword',
    ATK: 6,
    ATKSPEED: 1.6,
    SHARP: 0,
    STR: 0,
}
const zombie = {
    NAME: 'Zombie',
    HP: 20,
    ARM: 2,
    TOUGH: 0,
    PROT: 0,
    RES: 0,
    WEAPON: 'Zombie'
}

console.log(metasim.DPS(ironsword))
console.log(metasim.mobDPS(zombie, ironsword))