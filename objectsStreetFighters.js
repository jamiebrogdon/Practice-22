//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighterCharacters(punch, kick, agility, costume, specialMove, catchPhrase){
    this.punch = punch
    this.kick = kick
    this.agility = agility
    this.costume = costume
    this.specials = specialMove
    this.phrase = catchPhrase
    this.taunt = function(){
        console.log(`You cant handle my ${this.specials}`)
    }
    this.winning = function(){
        console.log(`Ha!HA! ${this.phrase}`)
    }
    this.dash = function(){
        console.log('Whoopsie! Ya Missed')
    }
}

let ruck = new StreetFighterCharacters('high', 'high', true, 'black suit', 'sucker punch', 'BOOYAAAA')

// console log:

ruck.taunt()
//console reads out: "You cant handle my sucker punch"

ruck.winning()
//console reads out: "Ha!HA! BOOYAAAA"

ruck
/* console reads out:
StreetFighterCharacters {
punch: 'high', 
kick: 'high', 
agility: true,
costume: 'black suit',
specials: 'sucker punch', …}
agility: true
costume: "black suit"
dash: ƒ ()
kick: "high"
phrase: "BOOYAAAA"
punch: "high"
specials: "sucker punch"
taunt: ƒ ()
winning: ƒ ()
[[Prototype]] : Object
*/
