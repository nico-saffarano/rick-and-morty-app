const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;
  const userFound = users.find(
    (user) => user.email === email && user.password === password
  );
  if (userFound) return res.status(200).json({ access: true });
  return res.status(200).json({ access: false });

 /*  return userFound //condicional ternario
  ? res.status(200).json({access:true})  //if
  : res.status(200).json({access:false}) //else */
};

module.exports = {
  login,
};
