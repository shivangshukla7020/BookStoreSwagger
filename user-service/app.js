const express = require('express');
const userRoutes = require('./routes/userRoutes');
const swaggerui = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerConfig');

const app = express();
const PORT = 3003;

app.use(express.json());
app.use('/users', userRoutes);
app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerSpec));

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})