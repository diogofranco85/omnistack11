const express = require('express');
const routes = require('./routes');
const cors = require('cors');


const app = express();

const whitelist = [ 'http://localhost:3333','http://127.0.0.1:3333'];
var corsOptions = {
    origin: function(origin, callback){
        console.log(origin);
        if(whitelist.indexOf(origin) !== -1){
            callback(null,true);
        }else{
            callback(new Error('Not Allowed by CORS'))
        }
    }
}

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('Servidor iniciado na porta 3333');
})