/** @format */

// import axios from 'axios';

export class HttpClient {
	async get(url: string): Promise<any> {
		const resp = await fetch(url);
		const data = await resp.json();
		return { data, status: resp.status };
	}
}
