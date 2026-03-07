exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ message: "Access token missing" });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: "Invalid token format" });
  }

  if (token !== "fake-jwt-token") {
    return res.status(403).json({ message: "Invalid token" });
  }

  next();
};
