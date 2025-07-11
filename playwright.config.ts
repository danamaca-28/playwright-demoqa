import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests', // folderul cu testele

  testMatch: ['**/*.spec.ts'],  // ← mutat corect aici

  //retries: 2, // reîncearcă testele care pică

  timeout: 30000, // timeout per test

  expect: {
    timeout: 5000, // timeout pentru assertions
  },

  reporter: [['html', { open: 'never' }]],

  use: {
    browserName: 'chromium', // browser default
    headless: true,
    actionTimeout: 0,
    navigationTimeout: 60000,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
