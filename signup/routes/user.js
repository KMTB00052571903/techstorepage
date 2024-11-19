const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Registro de Usuario
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  await user.save();
  res.redirect('/');
});

// Inicio de Sesión
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    req.session.user = user;
    res.redirect('/profile');
  } else {
    res.redirect('/');
  }
});

// Cerrar Sesión
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

// Perfil de Usuario
router.get('/profile', async (req, res) => {
  if (!req.session.user) {
    res.redirect('/');
  } else {
    const user = await User.findById(req.session.user._id);
    res.render('profile', { user });
  }
});

// Cambiar Contraseña
router.post('/change-password', async (req, res) => {
  if (!req.session.user) {
    res.redirect('/');
  } else {
    const user = await User.findById(req.session.user._id);
    user.password = req.body.newPassword;
    await user.save();
    res.redirect('/profile');
  }
});

// Agregar a Favoritos
router.post('/add-favorite', async (req, res) => {
  if (!req.session.user) {
    res.redirect('/');
  } else {
    const user = await User.findById(req.session.user._id);
    user.favorites.push(req.body.item);
    await user.save();
    res.redirect('/profile');
  }
});

module.exports = router;


