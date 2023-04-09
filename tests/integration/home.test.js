const request = require('supertest');
const app = require('express')();

test('home route is working', async () => {
    app.get('/', function(req, res) {
        res.status(200).json({ 
            message : 'Welcome',
            status : 1
        });
    });
});