/** @format */

type Size = '' | 'S' | 'M' | 'L';

class Product {
	constructor(
		public name: string = '',
		public price: number = 0,
		public size: Size = ''
	) {}

	toString() {
		// No DRY.
		// if (this.name.length <= 0) throw Error('Name is empty');
		// if (this.price <= 0) throw Error('Price is 0');
		// if (this.size.length <= 0) throw Error('Size is empty');

		/**
		 *  "this" hace referencia a la clase, entonces las "key" son cada una de las propiedades en el constructor.
		 */
		if (!this.isProductReady()) return;

		return `${this.name} (${this.price}), ${this.size}`;
	}

	private isProductReady(): boolean {
		// DRY.
		for (const key in this) {
			switch (typeof this[key]) {
				// Evaluando todos los string.
				case 'string':
					if ((<string>(<unknown>this[key])).length <= 0)
						throw Error(`${key} is empty`);
					break;
				// Evaluando todos los number.
				case 'number':
					if (<number>(<unknown>this[key]) <= 0) throw Error(`${key} is 0`);
					break;

				default:
					throw Error(`${typeof this[key]} is not valid`);
			}
		}

		return true;
	}
}

(() => {
	const bluePants = new Product('Blue Pants', 10, 'L');
	console.log(bluePants.toString());
})();
