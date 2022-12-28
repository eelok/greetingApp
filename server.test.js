'use strict';
const request = require('supertest');

const app = require('./app');


describe('server', () => {
    test('should test / and returng Greeting Everybody!', (done) => {
        const req = request(app)
            .get('/')
            .expect(200)
            .then(res => {
                expect(res.text).toEqual("Greeting Everybody");
                done();
            });        
    });
});