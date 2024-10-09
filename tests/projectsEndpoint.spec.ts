import { test, Page, expect } from '@playwright/test';
import { createProject, deleteProject } from '../api-calls/projectsEndpoint';
import { generateProjectData } from '../utils/generateProjectData';

test.describe('test', { tag: '@regression' }, () => {
  test(
    'Create new poroject with valid parentProject as _Root',
    { tag: '@positive' },
    async ({ page }: { page: Page }) => {
      const createProj = await createProject(
        { page },
        generateProjectData.projectParentDefault,
        generateProjectData.projectName(),
        generateProjectData.projectKey(),
        generateProjectData.isActiveTrue
      );

      expect(createProj.response.status()).toBe(200);
      expect(createProj.jsonResponse).toBeTruthy();

      const deleteCreatedProject = await deleteProject(
        { page },
        createProj.jsonResponse.id
      );
      expect(deleteCreatedProject.response.status()).toBe(204);
    }
  );
  test(
    'Create new poroject with valid parentProject as _Root and create a nested project in it',
    { tag: '@positive' },
    async ({ page }: { page: Page }) => {
      const createProject1 = await createProject(
        { page },
        generateProjectData.projectParentDefault,
        generateProjectData.projectName(),
        generateProjectData.projectKey(),
        generateProjectData.isActiveTrue
      );

      expect(createProject1.response.status()).toBe(200);
      expect(createProject1.jsonResponse).toBeTruthy();

      const createProject2 = await createProject(
        { page },
        createProject1.jsonResponse.id,
        generateProjectData.projectName(),
        generateProjectData.projectKey(),
        generateProjectData.isActiveTrue
      );

      expect(createProject2.response.status()).toBe(200);
      expect(createProject2.jsonResponse).toBeTruthy();

      // When the main project is deleted, the second project will also get deleted
      const deleteFirstProject = await deleteProject(
        { page },
        createProject1.jsonResponse.id
      );
      expect(deleteFirstProject.response.status()).toBe(204);
    }
  );
  test(
    'Create new poroject with non-existing parentProject',
    { tag: '@negative' },
    async ({ page }: { page: Page }) => {
      const createProjectWithInvalidParentProject = await createProject(
        { page },
        generateProjectData.invalidProjectParentDefault(),
        generateProjectData.projectName(),
        generateProjectData.projectKey(),
        generateProjectData.isActiveTrue
      );

      expect(createProjectWithInvalidParentProject.jsonResponse).toContain(
        'No project found by name or internal/external id'
      );
    }
  );
});
