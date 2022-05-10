/** @format */

(() => {
	type Gender = 'M' | 'F';

	interface PersonProps {
		name: string;
		gender: Gender;
		birthdate: Date;
	}

	/**
	 * Aplicando el principio de responsabilidad única.
	 * Priorizar la composición frente a la herencia. (evitar el extend)
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

	interface UserProps {
		email: string;
		role: string;
	}

	class User {
		email: string;
		role: string;

		constructor({ email, role }: UserProps) {
			this.email = email;
			this.role = role;
		}

		checkCredentials(): boolean {
			return true;
		}
	}

	interface SettinsProps {
		workinDirectory: string;
		lastOpenFolder: string;
	}

	class Settings {
		workinDirectory: string;
		lastOpenFolder: string;

		constructor({ workinDirectory, lastOpenFolder }: SettinsProps) {
			this.workinDirectory = workinDirectory;
			this.lastOpenFolder = lastOpenFolder;
		}
	}

	interface UserSettinsProps {
		workinDirectory: string;
		lastOpenFolder: string;
		email: string;
		role: string;

		name: string;
		gender: Gender;
		birthdate: Date;
	}

	class UserSettings {
		public person: Person;
		public user: User;
		public settings: Settings;
		constructor({
			name,
			gender,
			birthdate,
			email,
			role,
			workinDirectory,
			lastOpenFolder,
		}: UserSettinsProps) {
			this.person = new Person({ name, gender, birthdate });
			this.user = new User({ email, role });
			this.settings = new Settings({ workinDirectory, lastOpenFolder });
		}
	}

	const userSettings = new UserSettings({
		workinDirectory: '/user/home',
		lastOpenFolder: '/home',
		email: 'user@google.com',
		role: 'admin',
		name: 'User',
		gender: 'M',
		birthdate: new Date('1985,10-21'),
	});

	console.log({
		userSettings,
	});
})();
