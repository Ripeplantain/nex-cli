function jsMiddlewareTemplate(name) {
  return `import express from 'express'
import logger from '../helper/logger'
    
export const ${name} = (req, res, next) => {
    logger.info('middleware working');
    next();
}`;
}

function tsMiddlewareTemplate(name) {
  return `import express from 'express';
import logger from '../helper/logger';
        
export const ${name} = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.info('middleware working');
    next();
}`;
}

export { jsMiddlewareTemplate, tsMiddlewareTemplate };
