const express = require('express');
const orderRoutes = require('./routes/orderRoutes');
const swaggerui = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerConfig');

const app = express();
const PORT = 3002;

app.use(express.json());
app.use('/order',orderRoutes);
app.use('/api-docs',swaggerui.serve, swaggerui.setup(swaggerSpec));

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})