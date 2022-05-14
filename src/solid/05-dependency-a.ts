/**
 * Dependency Inversion Principle.
 *
 * @format
 */

import { PostService } from './05-dependency-b';
import { JsonDataBaseService } from './05-dependency-c';

// Main
(async () => {
	const provider = new JsonDataBaseService();

	const postService = new PostService(provider);

	const posts = await postService.getPosts();

	console.log({ posts });
})();
