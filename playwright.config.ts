import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',            // unde sunt testele
  timeout: 30000,                // timeout 30 secunde pentru fiecare test
  expect: {
    timeout: 5000,               // timeout pentru `expect` assertions
  },
  reporter: 'list',              // poți schimba cu 'html' sau 'json'
  use: {
    browserName: 'chromium',     // browser default (chromium, firefox, webkit)
    headless: true,              // rulează în background (fără UI)
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
