# Routes

## Introduction to Routes
In an Express application, routes define how the application responds to client requests for specific endpoints. Routes can be defined to handle various HTTP methods such as GET, POST, PUT, DELETE, etc. They usually consist of a path and a callback function that handles the request and response.

## How nex-cli Helps with Routes
Nex-cli simplifies the process of creating and managing routes in your Express project. It provides commands to generate route files and organize your routing logic efficiently.

## Generating a Route
To add a route to your project use the `add:route` command 
```
npx cli add:route <route_name>

```

## Example of Generated Route
```javascript
// product.routes.ts
import express from 'express';
import { verifyAccessToken } from '../middleware/authentication.middleware';
import { createProductController, listOwnerProductsController, listProductsController,
        deleteProductController, updateProductController, getProductController,
        getProductByCartegoryController} from '../controller/product.controller';


const router = express.Router();

router.post('/api/product', verifyAccessToken, createProductController);
router.get('/api/product', verifyAccessToken, listOwnerProductsController);
router.get('/api/product/all',  listProductsController);
router.delete('/api/product/:id', verifyAccessToken, deleteProductController);
router.put('/api/product/:id', verifyAccessToken, updateProductController);
router.get('/api/product/:id', verifyAccessToken, getProductController);
router.get('/api/product/cartegory/:id', getProductByCartegoryController);


export default router;
```

```javascript
// index.ts
import productRouter from './product.routes';


const router = express.Router();

router.use(productRouter);


export default router;
```

In this example, the products route defines endpoints for creating, reading, updating, and deleting users, as well as retrieving a list of all products. Each route is linked to a corresponding controller function.Feel free to adjust the examples and explanations to better fit the specifics of your tool and how it manages routes. If there are additional features or specific workflows related to routes, we can include those as well.