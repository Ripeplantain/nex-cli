function typescriptModelTemplate(modelName) {
  return `import { Schema, model } from 'mongoose';

const ${modelName}Schema = new Schema({
  // Define the schema here
});

export default model('${modelName}', ${modelName}Schema);

`;
}

function javascriptModelTemplate(modelName) {
  return `import mongoose from 'mongoose';

const ${modelName}Schema = new mongoose.Schema({
    // Define the schema here
    });

module.exports = mongoose.model('${modelName}', ${modelName}Schema);
    
    `;
}

export { javascriptModelTemplate, typescriptModelTemplate };
