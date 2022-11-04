const db = require("../db/db");
const { Cheese, Board, User } = require('../models/index')

describe('testing if the database is created', () => {

  test('create', () => {
    const u1 = User.create({
      name: 'ismail',
      email: 'ik@gmail.com'
    })
      expect(u1.name).toBe('ismail');
    })

})