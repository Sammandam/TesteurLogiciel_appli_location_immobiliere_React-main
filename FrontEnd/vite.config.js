/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configuration des tests
  test: {
    environment: "jsdom", // simule un navigateur
    setupFiles: "./src/setupTests.js", // fichier exécuté avant les tests
  },
})
