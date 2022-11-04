const db = require("../db/db");
const { User, Cheese, Board } = require("../models");

describe('user tests', () => {

test('new user created?', async() => {
  const newUser1 = await User.create({
    name: 'ish',
    email: 'ish@gmail.com'
  })
 expect(newUser1.name).toBeTruthy()
 expect(newUser1.email).toBeTruthy()
 newUser1.destroy()
});

})