//Declares variables
var damage = 0;
var totaldmg = 0;
var atkspeed = 0;
var atkdelay = [.1, .2, .4, .8];
var sharpness = 0;
var strength = 0;
var armor = 0;
var toughness = 0;
var protection = 0;
var resistance = 0;
var health = 0;
var mobused = 0;
var weaponused = 0;
var precise = 0;
var tatkdelay = 0;

function annoucelist(mob1, weapon1) {
    for (let i = 0; i < mob1.length; i++) {
        mob(mob1[i])
        console.log(mobused + ": " + health + " HP, " + armor + " ARMOR, " + toughness + " TOUGHNESS, " + protection + " PROTECTION, " + " RES")
    }
    for (let i = 0; i < weapon1.length; i++) {
        weapon(weapon1[i])
        console.log(weaponused + ": " + damage + " ATK, " + atkspeed + " ATKSPEED, " + sharpness + " SHARPNESS, " + strength + " STR")
    }
}

function parametercheck(value) {
    if (typeof value !== undefined) {
        return (0)
    }
}
//Calculation Section: Calculates everything

//Round Function: Rounds to the nearest 10th
function round(num) {
    if (precise = "0") {
        num = Math.round(num * 10)
        num = num / 10
        return (num)
    } else {
        return (num)
    }
}
//Full Damage Function: Uses all parameters to calculate damage
function fulldamage(damage, armor, toughness, resistance, protection) {
    if (protection > 20) {
        protection = 20
    }
    damage = damage * (1 - Math.min(20, Math.max(armor / 5, armor - damage / (2 + toughness / 4))) / 25);
    damage = damage * (1 - (protection / 25))
    damage = damage * (1 - (resistance * .20))
    console.log(damage)
    return (damage)
}
//mobdpsbasic Function: Calculates how long it'll take to kill a mob with said weapon
function mobdps(health, damage, armor, toughness, resistance, protection, atkspeed, atkdelay) {
    //console.log("testdebug1"+health + " " + armor + " " + damage + " " + atkspeed+ " ")
    armor = parametercheck(armor)
    resistance = parametercheck(resistance)
    toughness = parametercheck(toughness)
    protection = parametercheck(protection)
    fulldamage(damage, armor, toughness, resistance, protection)
    var seconds = 0;
    while (health > 0) {
        //	console.log(damage + " " + atkspeed + " " + health)
        health = health - damage
        seconds = seconds + (1 / atkspeed) + atkdelay
    }
    return (round(seconds))
}
//dpsbasic Function: Calculates DPS of said weapon
function dps(damage, atkspeed) {

    return (round((atkspeed / 1) * damage))
}

//Situations Section: Loads up situations

//maintest Function: Used for running the simulations. Only use arrays
function maintest(mode, mob1, weapon1) {
    for (var i = 0; i < moblist.length; i++) {
        mob(mob1[i])
        for (var l = 0; l < weaponlist.length; l++) {
            weapon(weapon1[l])
            if (mode === "mobdpsfull") {
                for (let l = 0; l < atkdelay.length; l++) {
                    tatkdelay = atkdelay[l]
                    for (let l2 = 0; l2 < weaponlist.length; l2++) {
                        weapon(weapon1[l2])
                        console.log("(Basic DPS w/ Mob + " + tatkdelay + " Delay) Using " + weaponused + " against " + mobused + ": " + mobdps(health, damage, armor, toughness, resistance, protection, atkspeed, tatkdelay))
                    }
                }
                console.log(" ")
            } else if (mode === "mobdps") {
                console.log("(Basic DPS w/ Mob) Using " + weaponused + " against " + mobused + ": " + mobdps(health, damage, armor, toughness, resistance, protection, atkspeed, 0))
            } else if (mode === "dps") {
                console.log("(Basic DPS) Using " + weaponused + ": " + dps(damage, atkspeed))
            }
        }
    }
}




//Loads up the stats of said mob. If mob is set to "stat" it will use the stats in function mobstat()
function mob(mob) {
    if (mob === "stat") {
        mobstat()
    } else if (mob === "Zombie") {
        health = 20
        armor = 0
    } else if (mob === "Basic Test") {
        health = 40
        armor = 0
    }
    console.log("Mob Stats:" + health + ", " + armor + ", " + toughness)
    mobused = mob;
}


function weapon(weapon) {
    if (weapon === "stat") {
        console.log("Loading Weapon Stats:" + damage + ", " + atkspeed)
        weaponstat()
    }
    //Sword Category
    else if (weapon.toString().substring(weapon.length - 5) === "Sword") {

        if (weapon === "Iron Sword") {
            damage = 6
            atkspeed = 1.6

        } else if (weapon === "Diamond Sword") {
            damage = 7
            atkspeed = 1.6
        } else if (weapon === "Netherrite Sword") {
            damage = 8
            atkspeed = 1.6
        } else if (weapon === "Steel Sword") {
            damage = 9
            atkspeed = 1.2
        }
    }

    //Axe Category
    else if (weapon.toString().substring(weapon.length - 3) === "Axe") {

        if (weapon === "Iron Axe") {
            damage = 9
            atkspeed = 0.9
        } else if (weapon === "Diamond Axe") {
            damage = 9
            atkspeed = 1.0
        } else if (weapon === "Netherrite Axe") {
            damage = 10
            atkspeed = 1.0

        } else if (weapon === "Steel Axe") {
            damage = 10.5
            atkspeed = 0.8
        }
    }
    weaponused = weapon;
}




//User Section: Where the user can change stuff

//Where to set stats for custom mob being attacked
function mobstat() {
    health = 40
    armor = 20
    toughness = 20
    protection = 2
    resistance = 2
}

//Where to set stats for custom weapon used to attack mob
function weaponstat() {
    damage = 5
    atkspeed = 1
    atkdelay = .1
    sharpness = 0
    strength = 0
}

//Precise (precise = 0 or 1) doesn't work
//Mob List ( var moblist = ["mob", "mob", etc.]; ): Allows you to use certain mobs for testing. "stat" uses mobstat() from above Ex: var moblist = ["Zombie", "stat"];
//Weapon List (var weaponlist = ["weapon", "weapon", etc.];): Allows you to use certain weapons for testing. "stat" uses weaponstat() from above Ex: var weaponlist = ["Iron Axe", "stat"];
//Annouce List ( annoucelist(moblist), (weaponlist) ): Annouces list of all items in the moblist and weaponlist
//Main Test ( maintest(mode, moblist, weaponlist) ): Calculates and displays results using simulations
//Modes:
//mobdps(health, damage, armor, toughness, resistance, protection, atkspeed, atkdelay)
precise = 0
var moblist = ["stat"];
var weaponlist = ["Iron Sword"]
annoucelist(moblist, weaponlist)
for (let i = 0; i < 3; i++) {
    console.log(" ")
}
fulldamage(20000, 20, 16, 4, 5)
//console.log("DPS Test")
//maintest("dps", moblist, weaponlist)
//console.log(" ")
//console.log("DPS w/ Mob Test")
//maintest("mobdps", moblist, weaponlist)
//console.log(" ")
//console.log("DPS w/ Mob and ATK Speed Test")
//maintest("mobdpsfull", moblist, weaponlist)