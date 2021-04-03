
function fulldamage(damage, armor, toughness, resistance, EPF){
if (EPF > 20){
EPF = 20 
}
    damage = damage * (1 - Math.min(20, Math.max(armor / 5, armor - damage / (2 + toughness / 4))) / 25);  
    damage = damage * (1 - (EPF / 25)) 
    damage = damage * (1 - (resistance * .20))
return(damage)
}
//30 Damage, 20 Armor, 15 Toughness, 4 Resistance, 3 EPF
console.log(damage(30, 20, 15, 4, 3))