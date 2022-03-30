const express = require("express")
const passport = require("passport")
const User = require("../models")
const router = express.Router()

router.post("/register", (req, res) => {
  console.log(req.body)
  User.create(req.body).then((newUser) => res.status(201).send(newUser))
})

router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log(req.user)
  res.send(req.user)
})

router.post("/logout", (req, res) => {
  req.logOut()
  res.sendStatus(200)
})

router.get("/me", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401)
  }
  res.send(res.user)
})

// router.put("/fav/:userId", (req, res, next) => {
//   User.update(req.body, {
//     where: {
//       id: req.params.userId,
//     },
//     returning: true,
//   })
//     .then(([affectedRows, updated]) => {
//       const fav = updated[0];
//       res.send(fav);
//     })
//     .catch(next);
// });

// router.get("/favourites", (req, res) => {
//   console.log('HIZO EL PEDIDO');
//   User.findAll().then((favs) => res.send(favs))
// })

module.exports = router
