/** @format */

(() => {
	// No aplicando el principio de responsabilidad única
	type Gender = 'M' | 'F';

	// Alto acoplamiento

	class Person {
		// Bajo acomplamiento, no depende de ninguna otra clase.
		constructor(
			public firstName: string,
			public lastName: string,
			public gender: Gender,
			public birthdate: Date
		) {}
	}

	class User extends Person {
		// Alto acomplamiento, depende de Person.
		constructor(
			public email: string,
			public role: string,
			private lastAccess: Date,
			firstName: string,
			lastName: string,
			gender: Gender,
			birthdate: Date
		) {
			super(firstName, lastName, gender, birthdate);
			this.lastAccess = new Date();
		}

		checkCredentials() {
			return true;
		}
	}

	class UserSettings extends User {
		// Altísimo acomplamiento, depende de User y User de Person.
		constructor(
			public workingDirectory: string,
			public lastFolderOpen: string,
			email: string,
			role: string,
			firstName: string,
			lastName: string,
			gender: Gender,
			birthdate: Date
		) {
			super(email, role, new Date(), firstName, lastName, gender, birthdate);
		}
	}

	const userSettings = new UserSettings(
		'/urs/home',
		'/development',
		'fernando@google.com',
		'F',
		'Fernando',
		'Herrera',
		'M',
		new Date('1985-10-21')
	);

	console.log({ userSettings, credentials: userSettings.checkCredentials() });
})();
