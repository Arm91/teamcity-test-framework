import { Page } from '@playwright/test';
import { getIPAddress } from '../utils/getLocalIpAddress';
import { parseResponse } from '../utils/parseResponse';
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

  const jsonResponse = await parseResponse(response);
  return {
    response,
    jsonResponse,
  };
}

export async function readProject(
  { page }: { page: Page },
  searchType: string,
  id: string
) {
  const ipAddress = await getIPAddress();
  const requestHeaders = await headers(page);
  const response = await page.request.get(
    `http://${ipAddress}:8111/app/rest/projects/${searchType}:${id}`,
    {
      headers: requestHeaders,
    }
  );

  const jsonResponse = await parseResponse(response);
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

  const jsonResponse = await parseResponse(response);
  return {
    response,
    jsonResponse,
  };
}
