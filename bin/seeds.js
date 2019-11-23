require('../config/db.config')

const User = require('../models/user.model')
const Tweet = require('../models/tweet.model')
const Comment = require ('../models/comment.model')
const faker = require('faker')

User.deleteMany({})
  .then(() => Tweet.deleteMany({}))
  .then(() => Comment.deleteMany({}))
  .then(() => {
    for(let i = 0; i<100; i++){
      const user = new User({
        name: faker.name.findName(),
        email: faker.internet.email(),
        username: faker.internet.userName(),
        password: '1234567890',
        avatar: faker.image.avatar(),
        bio: faker.lorem.paragraph(),
        validated:true
      });

      user.save().then( user =>{
        for(let j=0; j<100;j++){
          const tweet = new Tweet({
              text: faker.lorem.paragraph(),
              image: faker.random.image(),
              user: user._id
          })
          tweet.save()
          .then()
          .catch(err => console.log(err))
        }
      }
      ).catch(err => console.log(err))      
    }
  })
  .then(() =>{
    User.find({})
    .then((users)=>{
      Tweet.find({})
      .then( tweets => {
        tweets.forEach(tweet =>{
          for(let i=0; i<100; i++){
            const comment = new Comment({
              text: faker.lorem.sentence,
              user: users[i]._id,
              tweet:tweet._id
            });
             comment.save()
             .then()
             .catch(err => console.log(err))
          }
        }

        )
      })
    })
  })
