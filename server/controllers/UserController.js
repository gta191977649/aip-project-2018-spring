var User = require('../models/user');

exports.user_list = function (req,res) {
  res.send('NYI');
}

exports.user_profile = function (req,res){
  const {id} = req.params;
  const query = req.query;

  console.log(query);

  res.send(`NYI : ${id}`);
}

exports.user_create = function (req,res){
  res.send('NYI');
}

exports.user_delete = function (req,res){
  res.send('NYI');
}

exports.user_login = function (req,res){
  res.send('NYI');
}

exports.user_logout = function (req,res){
  res.send('NYI');
}

exports.user_reset_password = function (req,res){
  res.send('NYI');
}