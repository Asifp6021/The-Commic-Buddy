//superHero Entry class
class SuperHeroEntry {
	constructor(superHeroName, superHeroUniverse, superHeroPower) {
		this.superHeroName = superHeroName;
		this.superHeroUniverse = superHeroUniverse;
		this.superHeroPower = superHeroPower;
	}
}

// SuperHeroList class holds all the methods
class SuperHeroList {
	// adding superHeroes
	addSuperHero(entry) {
		const listData = document.querySelector('.superhero-list-data');
		const listContainer = document.createElement('ul');
		listContainer.setAttribute('id', 'list');

		listContainer.innerHTML += `
				<li>${entry.superHeroName}</li>
				<li>${entry.superHeroPower}</li>
				<li>${entry.superHeroUniverse}</li>
				<i class="fas fa-trash"></i> `;

		listData.appendChild(listContainer);
	}

	// clear SuperHero Inputs field
	clearInputs() {
		[
			document.querySelector('#name').value,
			document.querySelector('#universe').value,
			document.querySelector('#power').value,
		] = ['', '', ''];
	}

	//validation error function
	validationError() {
		document.querySelector('.validate-error').classList.add('show-validation');
		setTimeout(() => {
			document
				.querySelector('.validate-error')
				.classList.remove('show-validation');
		}, 2500);
	}

	//validation success function
	validationSuccess() {
		document
			.querySelector('.validate-success')
			.classList.add('show-validation');
		setTimeout(() => {
			document
				.querySelector('.validate-success')
				.classList.remove('show-validation');
		}, 1500);
	}
}

// storing to the localStorage
class StoreSuperHero {
	//get superHero from ls
	static getSuperHero() {
		let superHeros;
		if (localStorage.getItem('superHeros') === null) {
			superHeros = [];
		} else {
			superHeros = JSON.parse(localStorage.getItem('superHeros'));
		}
		return superHeros;
	}

	// add superHero to ls
	static addSuperHero(entry) {
		const superHeroList = StoreSuperHero.getSuperHero();

		superHeroList.push(entry);
		localStorage.setItem('superHeros', JSON.stringify(superHeroList));
	}

	// showing data from ls
	static displaySuperHero() {
		const superHerosList = StoreSuperHero.getSuperHero();

		superHerosList.forEach((superHero) => {
			const list = new SuperHeroList();
			list.addSuperHero(superHero);
		});
	}

	//removing superhero from the ls
	static removeSuperHero(clickedSuperHero) {
		const superherosList = StoreSuperHero.getSuperHero();

		superherosList.forEach((superhero, index) => {
			if (superhero.superHeroName === clickedSuperHero) {
				superherosList.splice(index, 1);
			}
		})

		localStorage.setItem('superHeros', JSON.stringify(superherosList));
	}
}

// - - - - - - - -- - -  -- -- - - - - -- - - - - - - Events  - -- -- - - - - - -  --- - -- - - - - -- - --  -- -  - - - -- - - - -

document.addEventListener('DOMContentLoaded', StoreSuperHero.displaySuperHero);

const form = document.querySelector('.superhero-form');

// form-submissin event-listener
form.addEventListener('submit', function (e) {
	e.preventDefault();

	let [superHeroName, superHeroUniverse, superHeroPower] = [
		document.querySelector('#name').value,
		document.querySelector('#universe').value,
		document.querySelector('#power').value,
	];

	//instantiating the SuperHeroEntry class
	const entry = new SuperHeroEntry(
		superHeroName,
		superHeroUniverse,
		superHeroPower
	);

	//instantiating the SuperList class
	const list = new SuperHeroList();

	//validate the form if one or more of the input fields are empty
	if (
		superHeroName === '' ||
		superHeroUniverse === '' ||
		superHeroPower === ''
	) {
		list.validationError();
	} else {
		//to add superHero
		list.addSuperHero(entry);
		//to clear inputs
		list.clearInputs();
		// success message
		list.validationSuccess();
		//adding superHero to local storage
		StoreSuperHero.addSuperHero(entry);
	}

	console.log(list);
});

// - - - - - - - -- - -  -- -- - - - - -- - - - - - - - - - - - - - -- - -  -- -- - - - - --

// deleting the superHro
const listData = document.querySelector('.superhero-list-data');
listData.addEventListener('click', function (e) {
	if (e.target.className === 'fas fa-trash') {
		const trash = e.target.parentNode;

		const clickedSuperHero =
			e.target.previousElementSibling.previousElementSibling
			.previousElementSibling.textContent;

		StoreSuperHero.removeSuperHero(clickedSuperHero);

		trash.remove();
	}
});
