const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const sessions = require("express-session")
const passport = require("passport")
const localStrategy = require("passport-local").Strategy
const app = express()

const routes = require("./routes")
const User = require("./models")

app.use(express.json())
app.use(morgan("tiny"))
app.use(cors())
app.use(cookieParser())

app.use(
  sessions({
    secret: "secretoDb",
    resave: true,
    saveUninitialized: true,
  })
)

app.use(passport.initialize())
app.use(passport.session())

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, done) => {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            return done(null, false) //email not found
          }

          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) return done(null, false) // wrong password
            return done(null, user) // success
          })
        })
        .catch(done) // es lo mismo que err => { done(err) }
    }
  )
)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then((user) => {
      done(null, user)
    })
    .catch(done)
})

app.use("/api", routes)

app.use("/api", (req, res) => {
  res.sendStatus(404)
})

User.sync({ force: false }).then(() => {
  app.listen(3001, () => {
    console.log("Server up in port 3001")
  })
})
