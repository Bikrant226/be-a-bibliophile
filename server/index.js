const express=(require('express'))
const app=express();
const routes=require('./routes/Routes');
app.use(routes)


app.listen(3001,()=>console.log('Server is running on port 3001'));