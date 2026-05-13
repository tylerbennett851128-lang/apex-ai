/** @type {import('@sveltejs/kit').Handle} */
import axios from 'axios';
import { env } from '$env/dynamic/public';

export const checkHealthy = async (baseUrl: string) => {
  const endpoint = 'health';
  const url = `${baseUrl}/${endpoint}`;

  const response = {
    data: {},
    endpoint: endpoint,
    status: 0,
    statusText: ''
  };

  try {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };

    const res = await axios.get(url, { headers });
    response.data = res.data;
    response.status = res.status;
    response.statusText = res.statusText;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (err.response) {
        response.status = err.response.status;
        const data: any = err.response.data;
        console.log(`[API]: ${endpoint} failed `, response.status, data?.error);
        response.statusText = data?.error_message || err.message;
      }
    }
  }

  return response;
};

// Whenever change page, it check the backend is online or not.
export async function handle({ event, resolve }) {
  const baseUrl = env.PUBLIC_BASE_URL;
  if (baseUrl) {
    const response = await checkHealthy(baseUrl);
    event.locals.health = response.status === 200 && response.data === 'ok';
  }

  return resolve(event);
}
