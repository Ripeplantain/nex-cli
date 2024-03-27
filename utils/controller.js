import { exec } from 'child_process';

export default function addController(name) {
  const controllerName = name.charAt(0).toUpperCase() + name.slice(1);
  try {
    exec(
      `cd src && mkdir controllers && cd controllers && touch ${controllerName}Controller.js`,
      error => {
        if (error) {
          exec(
            `mkdir controllers && cd controllers && touch ${controllerName}Controller.js`
          );
        }
      }
    );
  } catch (error) {
    console.error('Error creating controller:', error.message);
  }
}
