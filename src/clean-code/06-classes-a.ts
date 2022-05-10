/** @format */

(() => {
	type Gender = 'M' | 'F';
	// Forma larga de crear una clase.
	class Person {
		public name: string;
		public gender: Gender;
		public birthdate: Date;

		constructor(name: string, gender: Gender, birthdate: Date) {
			this.name = name;
			this.gender = gender;
			this.birthdate = birthdate;
		}
	}

	const person = new Person('Diego', 'M', new Date('1991-11-23'));
	// console.log('person', person);

	// Forma Corta, declarando el nivel de acceso de las propiedades.
	class Person2 {
		constructor(
			public name: string,
			public gender: Gender,
			public birthdate: Date
		) {}
	}

	/**
	 * No aplicando el principio de responsabilidad única.
	 * Los problemas de la Herencia.
	 */

	class User extends Person {
		constructor(
			public email: string,
			public role: string,
			private lastAccess: Date,
			name: string,
			gender: Gender,
			birthdate: Date
		) {
			super(name, gender, birthdate);
			this.lastAccess = new Date();
		}

		checkCredentials(): boolean {
			return true;
		}
	}

	class UserSettings extends User {
		constructor(
			public workinDirectory: string,
			public lastOpenFolder: string,
			email: string,
			role: string,
			lastAccess: Date,
			name: string,
			gender: Gender,
			birthdate: Date
		) {
			super(email, role, lastAccess, name, gender, birthdate);
		}
	}

	const userSettings = new UserSettings(
		'/user/home',
		'/home',
		'user@google.com',
		'admin',
		new Date(),
		'User',
		'M',
		new Date('1985,10-21')
	);

	console.log({
		userSettings,
	});
})();
