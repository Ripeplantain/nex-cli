function javascriptControllerTemplate(controllerName) {
  return `import express from 'express';
  
//@desc create category
//@route POST /api/category
//@access ???
export const create${controllerName}Controller = async (req, res) => {
  try {
      res.status(200).json({ message: 'category created' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}

//@desc get all categories
//@route GET /api/category
//@access ???
export const get${controllerName}sController = async (req, res) => {
  try {
      res.status(200).json({ message: 'get all categories' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}

//@desc get single category
//@route GET /api/category/:id
//@access ???
export const get${controllerName}Controller = async (req, res) => {
  try {
      res.status(200).json({ message: 'get single category' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}

//@desc update category
//@route PUT /api/category/:id
//@access ???
export const update${controllerName}Controller = async (req, res) => {
  try {
      res.status(200).json({ message: 'update category' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}

//@desc delete category
//@route DELETE /api/category/:id
//@access ???
export const delete${controllerName}Controller = async (req, res) => {
  try {
      res.status(200).json({ message: 'delete category' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}`;
}

function typescriptControllerTemplate(controllerName) {
  return `import express, { Request, Response } from 'express'

//@desc create category
//@route POST /api/category
//@access ???
export const create${controllerName}Controller = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: 'category created' });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
}

//@desc get all categories
//@route GET /api/category
//@access ???
export const get${controllerName}sController = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: 'get all categories' });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
}

//@desc get single category
//@route GET /api/category/:id
//@access ???
export const get${controllerName}Controller = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: 'get single category' });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
}

//@desc update category
//@route PUT /api/category/:id
//@access ???
export const update${controllerName}Controller = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: 'update category' });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
}

//@desc delete category
//@route DELETE /api/category/:id
//@access ???
export const delete${controllerName}Controller = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: 'delete category' });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
}
`;
}

export { javascriptControllerTemplate, typescriptControllerTemplate };
