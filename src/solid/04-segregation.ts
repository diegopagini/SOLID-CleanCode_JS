/**
 * Interface Segregation Principle
 *
 * No obligar a una clase a utilizar un método que no utilize.
 * @format
 */

interface Bird {
	eat(): void;
}

interface FlyingBird {
	fly(): void;
}

interface SwimmerBird {
	swim(): void;
}

interface RunningBird {
	run(): void;
}

class Tucan implements Bird, FlyingBird {
	fly(): void {}
	eat(): void {}
}

class Humminbird implements Bird, FlyingBird {
	fly(): void {}
	eat(): void {}
}

class Ostrich implements Bird, RunningBird {
	eat(): void {}
	run(): void {}
}

class Penguin implements Bird, SwimmerBird {
	eat(): void {}
	swim(): void {}
}
