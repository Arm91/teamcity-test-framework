import { Page } from '@playwright/test';
import { getAuthToken } from '../api-calls/generateAuthToken';

export const headers = async (page: Page) => {
  const authToken = await getAuthToken({ page });
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-TC-CSRF-TOKEN': authToken ? authToken : 'Could not retreive token',
  };
};
