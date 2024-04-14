import { exec } from 'child_process';

export default function addService(name) {
  const serviceName = name.charAt(0).toLowerCase() + name.slice(1);

  try {
    exec(
      `cd src && mkdir services && cd services && touch ${serviceName}.service.js`,
      error => {
        if (error) {
          exec(
            `mkdir services && cd services && touch ${serviceName}.service.js`
          );
        }
      }
    );
  } catch (error) {
    console.error('Error creating service:', error.message);
  }
}
