const is_Authenticated = (req, res, next) => {
    if (req.session && req.session.user) {
      next();
    } else {
      res.status(401).send({ message: "Unauthorized" });
    }
  };
  
  export default is_Authenticated;
  