import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/react-portfolio/", // repo name
  build: { outDir: "docs" }, // so GH Pages can serve from /docs
});
