import fs from 'fs';
import serviceTemplate from '../constants/serviceTemplate.js';
import { doesProjectExist } from './file.js';

export default function addService(name) {
  const serviceName = name.charAt(0).toLowerCase() + name.slice(1);
  const serviceDirectory = 'src/controllers';
  const isTypescript = doesProjectExist('tsconfig.json');

  try {
    if (!fs.existsSync(serviceDirectory)) {
      fs.mkdirSync(serviceDirectory, { recursive: true });
    }

    fs.writeFileSync(
      `${serviceDirectory}/${serviceName}.service.${isTypescript ? 'ts' : 'ts'}`,
      serviceTemplate
    );
  } catch (error) {
    console.error('Error creating service:', error.message);
  }
}
