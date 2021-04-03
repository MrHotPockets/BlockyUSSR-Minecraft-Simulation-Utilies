const rfunc = require('../functions_used')
const dcalc = require('./damage_calculatons')

const mobDPS = (mobUsed, weaponUsed, ATKDELAY) => {
    rfunc.checkProperties(mobUsed)
    rfunc.checkProperties(weaponUsed)
    dcalc.damage(mobUsed, weaponUsed)

    let { HP } = mobUsed;
    let seconds = 0;
    const { ATK, ATKSPEED } = weaponUsed
    while (HP > 0){
        HP = HP - ATK
        seconds = seconds + (1 / ATKSPEED) + ATKDELAY
    }
    return (seconds)
}

const DPS = (weaponUsed) => {
    const { ATK, ATKSPEED } = weaponUsed
    return ((ATKSPEED / 1) * ATK)
}

exports.mobDPS = mobDPS;
exports.DPS = DPS;
