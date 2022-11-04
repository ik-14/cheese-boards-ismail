const { User, Cheese, Board } = require('../models/index')
const db = require('./db')

async function seed() {
  await db.sync({
    force: true
  })

  await User.bulkCreate([
    {
      name: 'user1',
      email: 'user1@gmail.com'
    },
    {
      name: 'user2',
      email: 'user2@gmail.com'
    },
    {
      name: 'user3',
      email: 'user3@gmail.com'
    },
    {
      name: 'user4',
      email: 'user4@gmail.com'
    },
    {
      name: 'user5',
      email: 'user5@gmail.com'
    },
    {
      name: 'user6',
      email: 'user6@gmail.com'
    },
    {
      name: 'user7',
      email: 'user7@gmail.com'
    },
  ])

  await Cheese.bulkCreate([
    {
      title: 'cheese1',
      description: 'okay cheese'
    },
    {
      title: 'cheese2',
      description: 'bad cheese'
    },
    {
      title: 'cheese3',
      description: 'good cheese'
    },
    {
      title: 'cheese4',
      description: 'great cheese'
    },
    {
      title: 'cheese5',
      description: 'perfect cheese'
    },
  ])

  await Board.bulkCreate([
    {
      type: 'board1',
      description: 'french cheese',
      rating: 3
    },
    {
      type: 'board2',
      description: 'soft cheese',
      rating: 2
    },
    {
      type: 'board3',
      description: 'spanish cheese',
      rating: 4
    },
    {
      type: 'board4',
      description: 'hard cheese',
      rating: 4
    },
    {
      type: 'board5',
      description: 'german cheese',
      rating: 1
    },
    {
      type: 'board6',
      description: 'GOAT cheese',
      rating: 5
    },
  ])
}

seed()