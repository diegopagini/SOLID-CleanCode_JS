/** @format */

(() => {
	/**
	 * Aplicar el principio de responsabilidad única.
	 * Priorizar la composición frente a la herencia. (sin extends)
	 */

	type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

	class HtmlElement {
		constructor(public id: string, public type: HtmlType) {}
	}

	// ❌
	// class InputAttributes extends HtmlElement {
	// 	constructor(public value: string, public placeholder: string, id: string) {
	// 		super(id, 'input');
	// 	}
	// }

	// ✅
	class InputAttributes {
		constructor(public value: string, public placeholder: string) {}
	}

	// ❌
	// class InputEvents extends InputAttributes {
	// 	constructor(value: string, placeholder: string, id: string) {
	// 		super(value, placeholder, id);
	// 	}
	// 	setFocus(): void {}
	// 	getValue(): void {}
	// 	isActive(): void {}
	// 	removeValue(): void {}
	// }

	// ✅
	class InputEvents {
		constructor() {}

		setFocus(): void {}
		getValue(): void {}
		isActive(): void {}
		removeValue(): void {}
	}

	// Idea para la nueva clase InputElement
	class InputElement {
		public html: HtmlElement;
		public attributes: InputAttributes;
		public events: InputEvents;

		constructor(value: string, placeholder: string, id: string) {
			this.html = new HtmlElement(id, 'input');
			this.attributes = new InputAttributes(value, placeholder);
			this.events = new InputEvents();
		}
	}

	const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

	console.log({ nameField });
})();
