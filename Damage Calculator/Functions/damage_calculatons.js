const rfunc = require('../functions_used')

const damage = (mobUsed, weaponUsed) => {
    const { ARM, TOUGH, PROT, RES } = mobUsed
    let { ATK } = weaponUsed

    if (PROT > 20) {
        PROT = 20
    }
    ATK = ATK * (1 - Math.min(20, Math.max(ARM / 5, ARM - ATK / (2 + TOUGH / 4))) / 25);
    ATK = ATK * (1 - (PROT / 25))
    ATK = ATK * (1 - (RES * .20))
    return (ATK)
}

exports.damage = damage;