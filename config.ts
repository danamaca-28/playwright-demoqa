import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false, // Afișează browserul
    video: 'on',      // Înregistrează video
    screenshot: 'on', // Fă screenshot automat la erori
  },
});
