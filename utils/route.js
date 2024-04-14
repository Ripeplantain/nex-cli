import fs from 'fs';
import routeTemplate from '../constants/routeTemplate.js';

export default function addRoute(name) {
  const routeName = name.toLowerCase();
  const routesDirectory = 'src/routes';
  const indexFilePath = 'src/routes/index.js';

  try {
    if (!fs.existsSync(routesDirectory)) {
      fs.mkdirSync(routesDirectory, { recursive: true });
    }

    if (fs.existsSync(indexFilePath)) {
      fs.appendFileSync(indexFilePath, routeTemplate);
    } else {
      fs.writeFileSync(indexFilePath, routeTemplate);
    }

    fs.writeFileSync(
      `${routesDirectory}/${routeName}.routes.js`,
      routeTemplate
    );
  } catch (error) {
    console.error('Error creating route:', error.message);
  }
}
