const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,

    describe() {
      return `${aurora.name} has ${aurora.health} health points, ${aurora.strength} as strength and ${aurora.xp} XP points`;
    }
  };
  
  console.log(aurora.describe());
  
  // Aurora is harmed by an arrow
  aurora.health -= 20;
  
  // Aurora equips a strength necklace
  aurora.strength += 10;

  // Aurora defeats a boss
  aurora.xp += 15;
  
  console.log(aurora.describe());