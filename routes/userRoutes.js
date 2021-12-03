const fileSystem = require('fs');
const { join, existsSync, readFileSync } = fileSystem;

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

