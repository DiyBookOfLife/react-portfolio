import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-portfolio/", // 👈 this matches your repo name
  plugins: [react()],
});
