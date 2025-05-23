const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Book Store APIs',
            version: '1.0.0',
            description: 'APIs for managing orders'
        },
    },
    apis: ['./routes/*.js'],
}

module.exports = swaggerJSDoc(options);