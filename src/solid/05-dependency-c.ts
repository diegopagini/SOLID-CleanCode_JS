/** @format */

import { Post } from './05-dependency-b';
import localPost from '../data/local-database.json';

export class LocalDataBaseService implements PostProvider {
	// ❌
	async getFakePosts(): Promise<Post[]> {
		return await [
			{
				userId: 1,
				id: 1,
				title:
					'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
				body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
			},
			{
				userId: 1,
				id: 2,
				title: 'qui est esse',
				body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
			},
		];
	}

	async getPosts(): Promise<Post[]> {
		return await localPost;
	}
}

export class JsonDataBaseService implements PostProvider {
	// ✅
	async getPosts(): Promise<Post[]> {
		return await localPost;
	}
}

export class WebApiPostService implements PostProvider {
	async getPosts(): Promise<Post[]> {
		return await (
			await fetch('https://jsonplaceholder.typicode.com/posts')
		).json();
	}
}

/**
 * Para el "Liskov Substitution Principle" y "Open Closed Principle".
 */
export abstract class PostProvider {
	// ✅
	abstract getPosts(): Promise<Post[]>;
}
