const fileSystem = require('fs');
const { join, existsSync, readFileSync, write } = fileSystem;

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
}

module.exports = userRoute;