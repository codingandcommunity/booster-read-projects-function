const app = require('../src/app');
const expect = require('chai').expect;

describe('app.js', () => {
    describe('/', () => {
        it('should exist', () => {
            expect(app).to.exist;
        });
    });
});