const users = require("../../utils/user");

const login = (req, res) => {
  const { email, password } = req.query;

  const authenticatedUser = users.find(
    (user) => user.email === email && user.password === password
  );

  authenticatedUser
    ? res.status(200).json({
        access: true,
        message: "User authenticated correctly",
      })
    : res.status(401).json({
        access: false,
        message: "Incorrect credentials",
      });
};

module.exports = { login };
