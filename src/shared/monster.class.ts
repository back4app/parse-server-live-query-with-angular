import * as Parse from 'parse';
export class Monster extends Parse.Object {

    constructor() {
      // Pass the ClassName to the Parse.Object constructor
      super('Monster');
      // All other initialization
      this.set('sound', 'Rawr');
    }
  
    hasSuperHumanStrength() {
      return this.get('strength') > 18;
    }
  
    static spawn(strength) {
      var monster = new Monster();
      monster.set('strength', strength);
      return monster;
    }
  }

  Parse.Object.registerSubclass('Monster', Monster);