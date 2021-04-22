let userController = {
  findByEmail: (email) => {
  const user = database.find((user) => user.email === email);
  if (user) {
    return user;
  }
  throw new Error(`Couldn't find user with email: ${email}`);
},

  findById : (id) => {
  const user = database.find((user) => user.id === id);
  if (user) {
    return user;
  }
  throw new Error(`Couldn't find user with id: ${id}`);
},

  getUserByEmailIdAndPassword : (email, password) => {
  let user = findByEmail(email);
  if (user) {
    if (isUserValid(user, password)) {
      return user;
    }
  }
  return null;
} ,

  getUserById : (id) => {
  let user = findById(id);
  if (user) {
    return user;
  }
  return null;
},

  isUserValid: (user, password) => {
  return user.password === password;
},

}

module.exports = userController
