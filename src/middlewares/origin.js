const ckeckSession = (req, res, next) => {
  const headerAuth = req.headers.authorization || "";
  //TODO Bearer
  const token = headerAuth.split(" ").pop(); //1111
  if (!token) {
    res.status(405);
    res.send({ error: "no tienes token" });
  } else {
    next();
  }
};

module.exports = { ckeckSession };
