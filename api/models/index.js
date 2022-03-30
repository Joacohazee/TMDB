const S = require("sequelize")
const db = require("../db")

const bcrypt = require("bcrypt")

class User extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt)
  }
}

User.init(
  {
    user: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    salt: {
      type: S.STRING,
    },
    favourites:{
        type: S.ARRAY(S.STRING),
        defaultValue: []
    }
  },
  { sequelize: db, modelName: "users" }
)



User.beforeCreate(user => {
  return bcrypt.genSalt(4).then((salt) => {
    user.salt = salt
    return user.hash(user.password, salt)
  }).then(hash => {
      user.password = hash
  })
})

module.exports = User
