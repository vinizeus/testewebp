const express = require('express');
const app = express();
const nsfw = require('./src/data/nsfw.json')
const PORT  = process.env.PORT || 8877;
const random = (min, max) => Math.floor(Math.random() * (max - min) + min);


app.get('/nsfw', (req, res,) => 
    res.json (nsfw[random(0, nsfw.length)])
);

app.get('/', (req, res) => {
    res.json({
        msg: 'OK'
    })
})

app.listen(PORT, () => {
console.log('O servidor está funcionando na porta ' + PORT)
});