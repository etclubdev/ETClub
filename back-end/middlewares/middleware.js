export default {
  isAdmin: (req, res, next) => {
    if (res.locals.auth) {
      if (res.locals.auth.Role == 0) return next();
      res.status(403).json({code: 403, msg: "ERROR"});
    } else {
      return res.redirect("/auth/login");
    }
  },
};
