import Roll from "./utils/dice";

export function fight(enemy) {
  const characterAttackValue = Roll.d6();

  if (characterAttackValue > 5) {
    enemy.hitPoints -= 20;
  } else if (characterAttackValue > 3) {
    enemy.hitPoints -= 10;
  } else if (characterAttackValue > 1) {
    enemy.hitPoints -= 5;
  } else {
    enemy.hitPoints -= 1;
  }
}
