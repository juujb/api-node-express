const fileSystem = require('fs');
const { join } = require('path');
const { existsSync, readFileSync, writeFileSync } = fileSystem;

const filePath = join(__dirname, 'users.json');

const getUsers = () => {
  const data = existsSync(filePath)
    ? readFileSync(filePath)
    : [];
  
  try {
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

const saveUser = (users) => writeFileSync(filePath, JSON.stringify(users, null, '\t'));

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

      res.status(201).send('CREATED')
    })
    .put((req, res) => {
      const users = getUsers();
      
    })
}

module.exports = userRoute;