import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://demoqa.com/login');
  }

  async login(username: string, password: string) {
    await this.page.fill('#userName', username);
    await this.page.fill('#password', password);
    await this.page.click('#login');
  }

  async logout() {
    await this.page.click('#submit');
  }
}
