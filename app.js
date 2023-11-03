//superHero Entry class
class SuperHeroEntry {
	constructor(superHeroName, superHeroUniverse, superHeroPower) {
		this.superHeroName = superHeroName;
		this.superHeroUniverse = superHeroUniverse;
		this.superHeroPower = superHeroPower;
	}
}

class SuperHeroList {}

// - - - - - - - -- - -  -- -- - - - - -- - - - - - - Events  - -- -- - - - - - -  --- - -- - - - - -- - --  -- -  - - - -- - - - -

const form = document.querySelector('.superhero-form');

form.addEventListener('submit', function (e) {
	e.preventDefault();

	let [superHeroName, superHeroUniverse, superHeroPower] = [
		document.querySelector('#name').value,
		document.querySelector('#universe').value,
		document.querySelector('#power').value,
	];

	//instantiating the SuperHeroEntry class
	const entry = new SuperHeroEntry(superHeroName, superHeroUniverse, superHeroPower);

	//instantiating the SuperList class
	const list = new SuperHeroList();

	// creaing methods for SuperHero list
	//to add superHero
	list.addSuperHero(entry);
	console.log(list);
});
