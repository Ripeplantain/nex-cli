# Models

## Introduction to Models
In an Express application, models are used to represent and interact with the data layer. They define the structure of your data, include validations, and contain business logic. Typically, models are used with a database to perform CRUD (Create, Read, Update, Delete) operations.

## How Nex-cli helps with Models
Nex-cli simplifies the process of creating and managing models in your Express project. It provides commands to generate model files, set up database connections based on your favourite orm.

## Generating a Model
```
npx cli add:model <model_name>

```

## Adding a Database Connection to an Existing Project
```
npx cli add:database
```

## Model Example with Sequilize
```javascript
// models/User.js

import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default User;

```

## Model Example with Mongoose
```javascript
// models/User.js

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;

```
Feel free to adjust the examples and explanations to better fit the specifics of your tool and how it manages models. If there are additional features or specific workflows related to models, we can include those as well.