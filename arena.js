
class arena {

  constructor(name) {
    name = name.substring(0,1).toUpperCase() + name.substring(1,name.length)
    this.name = name;
    this.gladiators = [];
  }

  addGladiator(who) {
    if (this.gladiators.length === 2){
      alert('Too many dudes');
      return;
    }
    else {
      this.gladiators.push(who);
    }
  }

  entertained() {
    for (let i=0; i<2; i++){
      if (this.gladiators[i].name === 'Maximus') {
        return true;
      }
    }
  }

  remove(guy) {
    for (let i=0; i<2; i++){
      if (guy === this.gladiators[i].name) {
        this.gladiators.splice(i,1);
        return;
      }
    }
  }

  keepGuy(index) {
    var response = prompt("Live? (Yes) or Die? (No)");
    response = response.toUpperCase();
    if (response === 'YES'){
      alert('He LIVES');
    }
    else if (response === 'NO'){
      this.gladiators.splice(index,1);
    }
  }

  fight() {
    //------The Maximus Rule
    let superMax = false;
    superMax = colosseum.entertained();

    if (superMax) {
      for (let i=0; i<2; i++){
        if (this.gladiators[i].name !== 'Maximus') {
          colosseum.keepGuy(i);
          return;
        }
      }
    }

    //----Weapon conditions
    if (this.gladiators[0].weapon === this.gladiators[1].weapon){
      for (let i=0; i<2; i++){
        this.gladiators.pop();
      }
    }
    else {
      switch (this.gladiators[0].weapon) {
        case 'Trident':
          if (this.gladiators[1].weapon === 'Spear') {
            colosseum.keepGuy(1);
          }
          else if (this.gladiators[1].weapon === 'Club') {
            colosseum.keepGuy(0);
          }
          break;
        case 'Spear':
          if (this.gladiators[1].weapon === 'Club') {
            colosseum.keepGuy(1);
          }
          else if (this.gladiators[1].weapon === 'Trident') {
            colosseum.keepGuy(0);
          }
        break;
        case 'Club':
          if (this.gladiators[1].weapon === 'Trident') {
            colosseum.keepGuy(1);
          }
          else if (this.gladiators[1].weapon === 'Spear') {
            colosseum.keepGuy(0);
          }
        break;
      }
    }
  }

}

var max = new gladiator("Maximus","Trident")
var titus = new gladiator("Titus","Spear")
var colosseum = new arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
console.log(colosseum.gladiators)
colosseum.fight()
console.log(colosseum.gladiators) // => [max]


// var max = new gladiator("Maximus","Trident")
// var titus = new gladiator("Titus","Sword")
// var andronicus = new gladiator("Andronicus","Sword")
// var colosseum = new arena("Colosseum")
// colosseum.addGladiator(max)
// colosseum.addGladiator(titus)
// colosseum.addGladiator(andronicus)
// console.log(colosseum.gladiators.length) // => 2
