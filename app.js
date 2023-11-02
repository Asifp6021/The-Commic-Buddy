
//superHero Entry class
class SuperHeroEntry {
	constructor(superHeroName, superHeroUniverse, superHeroPower) {
		this.superHeroName = superHeroName;
		this.superHeroUniverse = superHeroUniverse;
		this.superHeroPower = superHeroPower;
	}
}

class SuperHeroList {

}

// - - - - - - - -- - -  -- -- - - - - -- - - - - - - Events  - -- -- - - - - - -  --- - -- - - - - -- - --  -- -  - - - -- - - - -

const form = document.querySelector('.superhero-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e);

    let [superHeroName, superHeroUniverse, superHeroPower] = [document.querySelector('#name').value, document.querySelector('#universe').value, document.querySelector('#power').value]
})