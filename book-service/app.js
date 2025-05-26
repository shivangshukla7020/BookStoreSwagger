const express = require('express');
const swaggerui = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerConfig');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = 3001

app.use(express.json());
app.use('/book',bookRoutes);
app.use('/api-docs',swaggerui.serve, swaggerui.setup(swaggerSpec));
app.use('/uploads', express.static('uploads'));


app.listen(PORT,()=>{
    console.log(`Server is running at post ${PORT}`);
})