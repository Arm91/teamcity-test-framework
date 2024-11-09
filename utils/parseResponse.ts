import { APIResponse } from '@playwright/test';

export async function parseResponse(response: APIResponse) {
  const contentType = response.headers()['content-type'] || '';
  let jsonResponse;

  if (
    contentType.includes('application/json') &&
    (await response.body()).length > 0
  ) {
    jsonResponse = await response.json();
  } else if ((await response.body()).length > 0) {
    jsonResponse = await response.text();
  } else {
    jsonResponse = null;
  }

  return jsonResponse;
}
