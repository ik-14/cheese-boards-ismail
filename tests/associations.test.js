const db = require("../db/db");
const { Cheese, Board, User } = require('../models/index')

describe('associations', () => {

  test('boards can be assigned to many users', async () => {

    const user1 = await User.create({
      name: 'ish',
      email: 'ish@gmail.com'
    })
    const board1 = await Board.create({
    type: 'newBoard',
    description: 'new description',
    rating: 3})

    await user1.addBoard(board1)
    // if the profile did not get assigned to the author, this won't work!
    const userBoard = await user1.getBoards()

    expect(userBoard[0].id).toEqual(board1.id)

    await user1.destroy()
    await board1.destroy()

  })


  test('boards can be assigned to many cheeses', async () => {

    const cheese1 = await Cheese.create({
      title: 'newcheese1',
      description: 'ehhh its alright 1'
    })
    const board1 = await Board.create({
    type: 'newBoard2',
    description: 'new description2',
    rating: 5})

    await cheese1.addBoard(board1)
    // if the profile did not get assigned to the author, this won't work!
    const cheeseBoard = await cheese1.getBoards()

    expect(cheeseBoard[0].id).toEqual(board1.id)

    await cheese1.destroy()
    await board1.destroy()

  })
})