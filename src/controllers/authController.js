exports.register = (req, res) => {
  const { email, password } = req.body;

  res.status(201).json({
    message: "User registered successfully",
    user: { email }
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  res.status(200).json({
    message: "Login successful",
    token: "fake-jwt-token"
  });
};
