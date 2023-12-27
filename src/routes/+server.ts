import { error, type RequestEvent } from '@sveltejs/kit';

export async function GET({ url }: RequestEvent) {
	error(404, { message: 'Not found' });
}

