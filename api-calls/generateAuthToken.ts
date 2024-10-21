import { Page } from '@playwright/test';
import { getIPAddress } from '../utils/getLocalIpAddress';

export async function getAuthToken({ page }: { page: Page }) {
  const ipAddress = await getIPAddress();
  //console.log('IP address is:', ipAddress);
  const response = await page.request.get(
    `http://admin:admin@${ipAddress}:8111/authenticationTest.html?csrf`,
    {
      headers: {
        Accept: 'application/json',
        Origin: 'http://localhost:8111',
      },
    }
  );

  if (response.status() === 200) {
    const csrfToken = await response.text();
    //console.log('CSRF token:', csrfToken);
    return csrfToken.trim();
  } else {
    //console.log('Failed to fetch CSRF token. Status:', response.status());
    return null;
  }
}
