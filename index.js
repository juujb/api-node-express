const express = require('express');
const userRoute = require('./routes/userRoutes');
const app = express();
const port = 3000;

userRoute(app);

app.get('/', (req, res) => res.send('Hello World from Express!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
