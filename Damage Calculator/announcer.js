//Fun fact: rfunc means Random Functions
const rfunc = require('./functions_used')


const formlist = (mob, weapon) => {
    //Are the following variables an object?
    rfunc.isObject(mob)
    rfunc.isObject(weapon)
    mob.forEach(mobUsed => {
        console.log(`${mobUsed.NAME} has 
            ${mobUsed.HP} health, 
            ${mobUsed.ARM} armor, 
            ${mobUsed.TOUGH} toughness, 
            ${modUsed.PROT}, protection, and 
            ${modUsed.RES} resistance`)
    })
    weapon.forEach(weaponUsed => {
        console.log(`${weaponUsed.NAME} has 
            ${weaponUsed.ATK} attack, 
            ${weaponUsed.ATKSPEED} attack_speed, 
            ${weaponUsed.SHARP} sharpness, and
            ${weaponUsed.STR}, strength`)
    })    
}

exports.formlist = formlist;