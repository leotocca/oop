// The JS way - Chapter 9 - OOP - https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter09.md

// Dogs

class Dogs {
	constructor(name, species, size) {
		(this.name = name), (this.species = species), (this.size = size);
	}

	bark() {
		if (this.size < 60) {
			return "Grrr! Grrr!";
		} else {
			return "Woof! Woof!";
		}
	}
}

// Character inventory 

class Character {
	constructor(name, health, strength, experience, gold, keys){
		this.name = name,
		this.health = health,
		this.strength = strength,
		this.experience = 0,
		this.gold = 10,
		this.keys = 1,
	};

	attack(target) {
		if (this.health > 0) {
		  const damage = this.strength;
		  console.log(
			`${this.name} attacks ${target.name} and causes ${damage} damage points`
		  );
		  target.health -= damage;
		  if (target.health > 0) {
			console.log(`${target.name} has ${target.health} health points left`);
		  } else {
			target.health = 0;
			const bonusXP = 10;
			console.log(
			  `${this
				.name} eliminated ${target.name} and wins ${bonusXP} experience points`
			);
			this.gold += 10;
			this.keys += 1;
			this.xp += bonusXP;
		  }
		} else {
			console.log(`${this.name} can't attack (they've been eliminated)`);
	}

	describe() {
		return `${this.name} has ${this.health} health points, ${this
		  .strength} as strength, ${this.xp} XP points, ${this.gold} gold coins and ${this.keys} key`;
	  };
}