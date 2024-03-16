import fs from 'fs-extra';
import ejs from 'ejs';
import path from 'path';

const dirname = path.dirname(new URL(import.meta.url).pathname);

export default function generateFile(projectName) {
  const templateDir = path.resolve(dirname, '../templates/express-with-ejs');
  const targetDir = path.resolve(process.cwd(), projectName);

  fs.copySync(templateDir, targetDir);

  const templateFiles = fs.readdirSync(targetDir);

  templateFiles.forEach(file => {
    const filePath = path.resolve(targetDir, file);
    const stats = fs.statSync(filePath);

    if (stats.isFile()) {
      const template = fs.readFileSync(filePath, 'utf-8');
      const content = ejs.render(template, { projectName });
      fs.writeFileSync(filePath, content);
    }
  });
}
