/** @format */

(() => {
	type Gender = 'M' | 'F';
	interface PersonProps {
		name: string;
		gender: Gender;
		birthdate: Date;
	}

	/**
	 * Objetos como parámetros.
	 */

	class Person {
		public birthdate: Date;
		public gender: Gender;
		public name: string;

		constructor({ name, gender, birthdate }: PersonProps) {
			this.birthdate = birthdate;
			this.gender = gender;
			this.name = name;
		}
	}

	interface UserProps extends PersonProps {
		email: string;
		role: string;
		lastAccess: Date;
	}

	class User extends Person {
		public email: string;
		public role: string;
		private lastAccess: Date;

		constructor({ email, role, name, gender, birthdate }: UserProps) {
			super({ name, gender, birthdate });
			this.lastAccess = new Date();
			this.email = email;
			this.role = role;
		}

		checkCredentials(): boolean {
			return true;
		}
	}

	interface UserSttingsProps extends UserProps {
		workinDirectory: string;
		lastOpenFolder: string;
	}

	class UserSettings extends User {
		public workinDirectory: string;
		public lastOpenFolder: string;

		constructor({
			workinDirectory,
			lastOpenFolder,
			email,
			role,
			lastAccess,
			name,
			gender,
			birthdate,
		}: UserSttingsProps) {
			super({ name, gender, birthdate, email, role, lastAccess });
			this.workinDirectory = workinDirectory;
			this.lastOpenFolder = lastOpenFolder;
		}
	}

	const userSettings = new UserSettings({
		workinDirectory: '/user/home',
		lastOpenFolder: '/home',
		email: 'user@google.com',
		role: 'admin',
		lastAccess: new Date(),
		name: 'User',
		gender: 'M',
		birthdate: new Date('1985,10-21'),
	});

	console.log({
		userSettings,
	});
})();
