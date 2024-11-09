import { Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { CreateProject } from './admin/createProject.page';
import { ProjectsPage } from './projects.page';

export class PageManager {
  private readonly page: Page;
  private readonly loginPageObject: LoginPage;
  private readonly createProjectPageObject: CreateProject;
  private readonly projectsPageObject: ProjectsPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPageObject = new LoginPage(this.page);
    this.createProjectPageObject = new CreateProject(this.page);
    this.projectsPageObject = new ProjectsPage(this.page);
  }

  loginPage() {
    return this.loginPageObject;
  }

  createProjectPage() {
    return this.createProjectPageObject;
  }

  projectsPage() {
    return this.projectsPageObject;
  }
}
