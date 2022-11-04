const db = require("../db/db");
const { User, Cheese, Board } = require("../models");

describe('cheese tests', () => {

  beforeAll(async () => await db.sync())
  afterAll(async () => await db.sync())

test('new board created?', async() => {
  const newBoard1 = await Board.create({
    type: 'newBoard',
    description: 'new description',
    rating: 3
  })
  expect(newBoard1.type).toBeTruthy();
  expect(newBoard1.description).toBeTruthy();
  expect(newBoard1.rating).toBeTruthy();
  newBoard1.destroy()
  });

})