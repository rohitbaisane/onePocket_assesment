const express = require('express');
const app = express();


app.all('*', (req, res) => {
    return res.status(200).send("Hello,World!");
})

app.listen(3000, () => { console.log('server is listening on 3000') });
