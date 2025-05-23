const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Book Store API',
            version: '1.0.0',
            description: 'APIs for managing books'
        },
    },
    apis: ['./routes/*.js'],
}

module.exports = swaggerJSDoc(options);