/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // чтобы писать test, expect без импорта
    environment: "jsdom", // для работы с DOM в тестах
  },
});
