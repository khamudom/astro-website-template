#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectName = process.argv[2];
if (!projectName) {
  console.error("Please provide a project name:");
  console.error("npm run setup <project-name>");
  process.exit(1);
}

// Optional: Rename the folder
const currentFolder = path.basename(__dirname);
const parentDir = path.dirname(__dirname);
const newFolderPath = path.join(parentDir, projectName);

if (currentFolder !== projectName) {
  try {
    fs.renameSync(__dirname, newFolderPath);
    console.log(
      `📁 Renamed folder from "${currentFolder}" to "${projectName}"`
    );
  } catch {
    console.warn(
      "⚠️ Could not rename folder. Please rename it manually if needed."
    );
  }
}

// Replace {{projectName}} in files
function replaceInFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const updatedContent = content.replace(/{{projectName}}/g, projectName);
  fs.writeFileSync(filePath, updatedContent);
}

const filesToProcess = [
  "package.json",
  "package-lock.json",
  "astro.config.mjs",
  "README.md",
  "src/components/Navigation.astro",
  "src/layouts/Layout.astro",
  "src/pages/index.astro",
];

filesToProcess.forEach((file) => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    replaceInFile(fullPath);
    console.log(`✅ Processed: ${file}`);
  } else {
    console.warn(`⚠️ File not found: ${file}`);
  }
});

console.log("\n🎉 Setup complete! Project name set to:", projectName);
