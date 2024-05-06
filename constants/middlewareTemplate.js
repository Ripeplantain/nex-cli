function jsMiddlewareTemplate(name) {
  return `import express from 'express'
    
export const ${name} = (req, res, next) => {
    console.log('middleware working');
    next();
}`;
}

function tsMiddlewareTemplate(name) {
  return `import express from 'express';
        
export const ${name} = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('middleware working');
    next();
}`;
}

export { jsMiddlewareTemplate, tsMiddlewareTemplate };
