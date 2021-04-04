var fs = require("fs");
const path = require('path')
var fas = require("./damage_calculatons/../../../Mobs and Weapons/weapons.json");

const loadWeapon = (selectedweapon) => {
    //Loads up the weapon.json
    const weaponspath = path.normalize('./damage_calculatons/../Mobs and Weapons/weapons.json')
    var file_content = fs.readFileSync(weaponspath);
    console.log(weaponspath)
    var weaponjson = JSON.parse(file_content);
    //Searches for each weapon
    selectedweapon = selectedweapon.toLowerCase()
    let weaponUsed;
      for(const mctype of weaponjson){
          for(const weapontype of mctype.weapon){
            for(const material of weapontype.material){
              if (material.weapon.toLowerCase() === selectedweapon) {
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
                    return(weaponUsed)
                }
              }  
            }
          }
      }
  }

  const loadMob = (selectedmob, selecteddifficulty) => {
    //Loads up the weapon.json
    const mobspath = path.normalize('./damage_calculatons/../Mobs and Weapons/mobs.json')
    var file_content = fs.readFileSync(mobspath);
    var mobsjson = JSON.parse(file_content);
    //Searches for each weapon
    selectedmob = selectedmob.toLowerCase()
    let mobUsed;
      for(const mctype of mobsjson){
        for(const mobs of mctype.mobs){
          if (mobs.mob.toLowerCase() === selectedmob){
            let { mob, type, health, armor, toughness, protection, resistance, attack} = mobs
            console.log(mobs)
            let isDifficultyInObject = attack.hasOwnProperty(selecteddifficulty)            
            if (isDifficultyInObject === true){
              for (let [key, value] of Object.entries(attack)){
                if (key === selecteddifficulty){
                  attack = value
                  break;
                }
              }
            }
            else{throw new Error(`Difficulty ${selecteddifficulty} is not contained in ${mob}. Perhaps you meant easy, normal, or hard?`)}

              mobUsed = {
                NAME: mob,
                HEALTH: health,
                ARM: armor,
                TOUGH: toughness,
                PROT: protection,
                RES: resistance,
                ATK: attack
              }
              
                return(mobUsed)
            }
        }
      }


  }


exports.loadWeapon = loadWeapon
exports.loadMob = loadMob

const weaponUsed = loadWeapon('Gold Sword')
console.log(weaponUsed)

console.log(loadMob('zombie', 'medium'))
