import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    port: 5000,
    open: true
  },
  preview: {
    port: 5050,
    open: true
  }
});
