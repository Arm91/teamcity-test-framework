/* eslint-disable */
import { Page, test, expect } from '@playwright/test';
import { PageManager } from '../../pages/pageManager';

import { readProject } from '../../api-calls/projectsEndpoint';
import { generateProjectData } from '../../utils/generateProjectData';
import { admin } from '../../utils/loginCredentials';

test.describe('test', { tag: '@regression' }, () => {
  test(
    'User should be able to create project',
    { tag: ['@positive'] },
    async ({ page }: { page: Page }) => {
      const pageManager = new PageManager(page);
      // подготовка окружения
      // step("Login as user");
      await pageManager.loginPage().goToLoginPage();
      await pageManager.loginPage().login(admin.username, admin.password);

      // взаимодействие с UI
      // step("Open `Create Project Page` (http://localhost:8111/admin/createObjectMenu.html)");
      await pageManager
        .createProjectPage()
        .createProjectModeSelector('_Root', 'createProjectMenu');

      // step("Send all project parameters (repository URL)");
      // step("Click `Proceed`");
      // step("Fix Project Name and Build Type name values");
      // step("Click `Proceed`");
      const projectName = generateProjectData.projectName();
      const buildTypeName = generateProjectData.projectName();
      await pageManager
        .createProjectPage()
        .createProject(
          'https://github.com/AlexPshe/spring-core-for-qa',
          projectName,
          buildTypeName
        );

      // проверка состояния API
      // (корректность отправки данных с UI на API)
      // step("Check that all entities (project, build type) was successfully created with correct data on API level");
      const getProjectData = await readProject({ page }, 'name', projectName);

      expect(getProjectData.response.status()).toBe(200);
      expect(getProjectData.jsonResponse.name).toBe(projectName);
      // проверка состояния UI
      // (корректность считывания данных и отображение данных на UI)
      // step("Check that project is visible on Projects Page (http://localhost:8111/favorite/projects)");
      await pageManager.projectsPage().goTofavoriteProjectsPage();

      const findByProjectName = await pageManager
        .projectsPage()
        .findProjectByName(projectName);

      await expect(findByProjectName).toBeTruthy();
    }
  );
  test.skip(
    'User should not be able to craete project without name',
    { tag: ['@negative'] },
    async ({ page }: { page: Page }) => {
      // подготовка окружения
      // step("Login as user");
      // step("Check number of projects");
      // взаимодействие с UI
      // step("Open `Create Project Page` (http://localhost:8111/admin/createObjectMenu.html)");
      // step("Send all project parameters (repository URL)");
      // step("Click `Proceed`");
      // step("Set Project Name");
      // step("Click `Proceed`");
      // проверка состояния API
      // (корректность отправки данных с UI на API)
      // step("Check that number of projects did not change");
      // проверка состояния UI
      // (корректность считывания данных и отображение данных на UI)
      // step("Check that error appears `Project name must not be empty`");
    }
  );
});
