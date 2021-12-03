const fileSystem = require('fs');
const { join } = require('path');
const { existsSync, readFileSync, write } = fileSystem;

const filePath = join(__dirname, 'users.json');

const getUsers = () => {
  const data = existsSync(filePath)
    ? readFileSync(filePath)
    : {};
  
  try {
    return JSON.parse(data);
  } catch (error) {
    return {}
  }
}

const saveUser = (user) => write(filePath, JSON.stringify(user, null, '\t'));

const userRoute = (app) => {
  app.route('/users/:id?')
    .get((req, res) => {
      const users = getUsers();
      res.send({ users });
    })
    .post((req, res) => {
      const users = getUsers();
      users.push(req.body)
      saveUser(users)

      res.send(201).send('OK')
    })
}

module.exports = userRoute;