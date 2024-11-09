import { Page, Locator } from '@playwright/test';
import { getIPAddress, getPort } from '../../utils/getLocalIpAddress';

export class CreateProject {
  readonly page: Page;
  readonly repositoryUrlInput: Locator;
  readonly proceedButton: Locator;
  readonly projectNameInput: Locator;
  readonly buildTypeNameInput: Locator;
  readonly proceedSecondButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.repositoryUrlInput = page.locator('#url');
    this.proceedButton = page.locator('input[name="createProjectFromUrl"]');
    this.projectNameInput = page.locator('#projectName');
    this.buildTypeNameInput = page.locator('#buildTypeName');
    this.proceedSecondButton = page.locator('input[value="Proceed"]');
  }

  async createProjectModeSelector(projectId: string, mode: string) {
    const ipAddress = await getIPAddress();
    await this.page.goto(
      `http://${ipAddress}:${getPort()}/admin/createObjectMenu.html?projectId=${projectId}&showMode=${mode}`
    );
  }

  async createProject(
    repositoryUrl: string,
    projectNameInput: string,
    buildTypeNameInput: string
  ) {
    await this.repositoryUrlInput.fill(repositoryUrl);
    await this.proceedButton.click();
    await this.projectNameInput.fill(projectNameInput);
    await this.buildTypeNameInput.fill(buildTypeNameInput);
    await this.proceedSecondButton.click();
  }
}
