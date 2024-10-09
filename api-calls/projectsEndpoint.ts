import { Page } from '@playwright/test';
import { getIPAddress } from '../utils/getLocalIpAddress';
import { headers } from '../payloads/headers';
import {
  locatorAcceptableValues,
  nameAcceptableValues,
  idAcceptableValues,
  copyAllAssociatedSettingsAcceptableValues,
  projectData,
} from '../payloads/projectsPayload';

export async function createProject(
  { page }: { page: Page },
  locator: locatorAcceptableValues,
  name: nameAcceptableValues,
  id: idAcceptableValues,
  copyAllAssociatedSettings: copyAllAssociatedSettingsAcceptableValues
) {
  const ipAddress = await getIPAddress();
  const requestHeaders = await headers(page);
  const response = await page.request.post(
    `http://${ipAddress}:8111/app/rest/projects`,
    {
      headers: requestHeaders,
      data: projectData(locator, name, id, copyAllAssociatedSettings),
    }
  );

  const contentType = response.headers()['content-type'] || '';
  // Check if response content-type is JSON before parsing
  let jsonResponse;
  if (contentType.includes('application/json')) {
    jsonResponse = await response.json();
  } else {
    jsonResponse = await response.text();
  }

  // For easier debugging
  // if (response.status() === 200) {
  //   console.log('Project Details:', jsonResponse);
  // } else {
  //   console.log(
  //     'Failed to retrieve project details. Status:',
  //     response.status(),
  //     'Response:',
  //     jsonResponse
  //   );
  // }

  return {
    response,
    jsonResponse,
  };
}

export async function deleteProject({ page }: { page: Page }, id: string) {
  const ipAddress = await getIPAddress();
  const requestHeaders = await headers(page);
  const response = await page.request.delete(
    `http://${ipAddress}:8111/app/rest/projects/id:${id}`,
    {
      headers: requestHeaders,
    }
  );

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
  return {
    response,
    jsonResponse,
  };
}
