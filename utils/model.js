import { exec } from 'child_process';

export default function addModel(name) {
  const modelName = name.charAt(0).toUpperCase() + name.slice(1);
  try {
    exec(
      `cd src && mkdir models && cd models && touch ${modelName}.js`,
      error => {
        if (error) {
          exec(`mkdir models && cd models && touch ${modelName}.model.js`);
        }
      }
    );
  } catch (error) {
    console.error('Error creating model:', error.message);
  }
}
