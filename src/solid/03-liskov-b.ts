/** @format */

export abstract class Vehicle {
	/**
	 * "abstract" nos obliga a tener ese método en caso de extender de esta
	 */
	abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle {
	constructor(private numberOfSeats: number) {
		super();
	}

	getNumberOfSeats() {
		return this.numberOfSeats;
	}
}

export class Audi extends Vehicle {
	constructor(private numberOfSeats: number) {
		super();
	}

	getNumberOfSeats() {
		return this.numberOfSeats;
	}
}

export class Toyota extends Vehicle {
	constructor(private numberOfSeats: number) {
		super();
	}

	getNumberOfSeats() {
		return this.numberOfSeats;
	}
}

export class Honda extends Vehicle {
	constructor(private numberOfSeats: number) {
		super();
	}

	getNumberOfSeats() {
		return this.numberOfSeats;
	}
}
