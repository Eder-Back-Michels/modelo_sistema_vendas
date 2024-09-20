const express = require('express');

const app = express();

app.get('/', (req, res)=>{
            res.send('Ola mundo');
});

app.listen(3001); 