const unitTest = `function sum(a, b) {
    return a + b;
}

describe('sum', () => {
    it('should add two numbers', () => {
        expect(sum(1, 2)).toBe(3);
    });`;

const integrationTest = `import request from 'supertest';
import app from '../../src/app.js';

describe('GET /', () => {
    it('should return 200 OK', done => {
        request(app)
            .get('/')
            .expect(200, done);
    });
});`;

export { unitTest, integrationTest };
