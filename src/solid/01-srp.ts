/** @format */

/**
 * Single Responsibility Principle
 */

(() => {
	interface Product {
		id: number;
		name: string;
	}

	class ProductService {
		private httpAdapter: Object = {
			http: fetch(''),
		};

		/**
		 * Obtener un producto.
		 * @param id
		 */

		getProduct(id: number): void {
			console.log('Producto: ', { id, name: 'OLED Tv' });
		}

		/**
		 * Realiza una petición para salvar en base de datos
		 * @param product
		 */

		saveProduct(product: Product): void {
			console.log('Guardando en base de datos', product);
		}
	}

	// Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
	// Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
	class ProductBloc {
		private productService: ProductService;
		private notifyService: NotifyService;

		constructor(productService: ProductService, notifyService: NotifyService) {
			this.productService = productService;
			this.notifyService = notifyService;
		}

		/**
		 * Realiza un proceso para obtener el producto y retornarlo
		 * @param id
		 */

		loadProduct(id: number): void {
			this.productService.getProduct(id);
		}

		/**
		 * Realiza una petición para salvar en base de datos
		 * @param product
		 */

		saveProduct(product: Product): void {
			this.productService.saveProduct(product);
		}

		/**
		 * Notificar a clientes.
		 */

		notifyClients(): void {
			this.notifyService.notifyClients();
		}
	}

	class CartBloc {
		private itemsInCart: Product[] = [];

		/**
		 * Agregar al carrito de compras
		 * @param productId
		 */

		onAddToCart(productId: number): void {
			console.log('Agregando al carrito ', productId);
		}
	}

	class NotifyService {
		private masterEmail: string = 'test@google.com';

		/**
		 * Notificar a clientes.
		 * @param emailList
		 */

		notifyClients(): void {
			console.log(this.masterEmail);
		}
	}

	const productService = new ProductService();
	const mailer = new NotifyService();
	const productBloc = new ProductBloc(productService, mailer);
	const cartBocl = new CartBloc();

	productBloc.loadProduct(10);
	productBloc.saveProduct({ id: 10, name: 'OLED TV' });
	productBloc.notifyClients();
	cartBocl.onAddToCart(10);
})();
