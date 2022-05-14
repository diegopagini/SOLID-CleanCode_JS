/** @format */

import { PostProvider } from './05-dependency-c';

export interface Post {
	body: string;
	id: number;
	title: string;
	userId: number;
}

export class PostService {
	private posts: Post[] = [];

	// ❌
	// constructor() {}
	// async getPosts(): Promise<Post[]> {
	// 	const jsonDB = new LocalDataBaseService();
	// 	this.posts = await jsonDB.getFakePosts();
	// 	return this.posts;
	// }

	// ✅
	constructor(private postProvider: PostProvider) {}

	async getPosts(): Promise<Post[]> {
		this.posts = await this.postProvider.getPosts();
		return this.posts;
	}
}
