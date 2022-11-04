const db = require("../db/db");
const { User, Cheese, Board } = require("../models");

describe('User tests', () => {

test('new cheese created?', async() => {
  const newCheese1 = await Cheese.create({
    title: 'newcheese',
    description: 'ehhh its alright'
  })
  expect(newCheese1.title).toBeTruthy()
  expect(newCheese1.description).toBeTruthy()
  newCheese1.destroy()
  });

})