/* eslint-disable*/

import { test, Page } from '@playwright/test';

test.describe.skip('description', { tag: '@regression' }, () => {
  test(
    'User should be able to create build config',
    { tag: ['@positive'] },
    async ({ page }: { page: Page }) => {
      //steps
    }
  );
  test(
    'User should not be able to craete build config without name',
    { tag: ['@negative'] },
    async ({ page }: { page: Page }) => {
      //steps
    }
  );
});
