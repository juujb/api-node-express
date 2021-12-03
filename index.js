const express = require('express');
const userRoute = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
userRoute(app);

app.get('/', (req, res) => res.send('Hello World from Express!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
