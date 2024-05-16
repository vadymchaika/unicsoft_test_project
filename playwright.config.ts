import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 120000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  workers: 1,
  reporter: 'html',
  expect: {
    timeout: 15000,
  },
  use: {
    baseURL: 'https://weathershopper.pythonanywhere.com/',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
        launchOptions: {
          // slowMo: 2000,
        },
      },
    },
  ],
});
