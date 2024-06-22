# Controllers 

## Introduction to Controllers
In an Express application, controllers handle the logic for processing requests and generating responses. They serve as an intermediary between the models (data layer) and views or API responses. Controllers usually contain functions that correspond to different routes and perform specific actions such as creating, reading, updating, or deleting data.

## How nex-cli Helps with Controllers
Nex-cli simplifies the process of creating and managing controllers in your Express project. It provides commands to generate controller files and organize your application logic efficiently.

## Generating a Controller
```
npx cli add:controller <controller_name>

```

## Example of a Generated Controller
```javascript
import User from '../models/User.js';

export const createUser = async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

```

# Services

## Introduction to Services
In an Express application, services are used to encapsulate business logic and data access. They act as an intermediary between the controllers and models, making the code more modular and easier to maintain. Services are responsible for performing operations on the data, such as fetching, updating, and deleting records.

## How nex-cli Helps with Services
Nex-cli helps you manage services by providing commands to generate service files, which can then be used to organize and encapsulate your application's business logic.

## Generating a Service
```
npx cli add:service <service_name>

```

## Example of a Generated Service
```javascript
import User from '../models/User.js';

export const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

export const getUserById = async (userId) => {
  return await User.findById(userId);
};
```

## Using Services in Controllers
```javascript

import { createUser, getUserById } from '../services/userService.js';

export const createUserController = async (req, res) => {
  try {
    const user = await createUser({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getUserController = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

```
Nex-cli simplifies the process of working with controllers and services in your Express projects. By providing commands to generate controller and service files, it helps ensure that your application logic is well-organized and modular. This allows you to focus more on building the core features of your application rather than boilerplate code and configurations.