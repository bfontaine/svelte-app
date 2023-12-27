import { error } from '@sveltejs/kit';

export async function GET() {
  console.log("in GET");
  error(404, { message: 'Not found' });
}
