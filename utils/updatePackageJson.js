import fs from 'fs';

export default function updatePackageJson(script) {
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
    packageJson.scripts = { ...packageJson.scripts, ...script };
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
  } catch (error) {
    console.error('Error updating package.json:', error.message);
  }
}
