import { exec } from 'child_process';

export default function addRoute(name) {
  const routeName = name.toLowerCase();
  try {
    exec(
      `cd src && mkdir routes && cd routes && touch ${routeName}.routes.js`,
      error => {
        if (error) {
          exec(`mkdir routes && cd routes && touch ${routeName}.routes.js`);
        }
      }
    );
  } catch (error) {
    console.error('Error creating route:', error.message);
  }
}
