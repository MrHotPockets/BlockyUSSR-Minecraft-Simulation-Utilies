var fs = require("fs");
const path = require('path')
var fas = require("./damage_calculatons/../../../Mobs and Weapons/weapons.json");

const loadWeapon = (selectedweapon) => {
    //Loads up the weapon.json
    const weaponspath = path.normalize('./damage_calculatons/../Mobs and Weapons/weapons.json')
    var file_content = fs.readFileSync(weaponspath);
    var weaponjson = JSON.parse(file_content);
    //Searches for each weapon
    selectedweapon = selectedweapon.toLowerCase()
    let weaponUsed;
    weaponjson.forEach(mctype => {
      mctype.weapon.forEach(category => {
        category.material.forEach(material => {
          if (material.weapon.toLowerCase() === selectedweapon) {
            const { weapon, damage, attackspeed, sharpness, strength } = material;
            //Renames keys in object
            weaponUsed = {
              NAME: weapon,
              ATK: damage,
              ATKSPEED: attackspeed,
              SHARP: sharpness,
              STR: strength
            }
  
          }
        })
      })
    })
    return (weaponUsed)
  }


exports.loadWeapon = loadWeapon

const weaponUsed = loadObject('Gold Sword')
console.log(weaponUsed)
