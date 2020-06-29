exports.allAccess = (req, res) => {
  res.status(200).send("Welcome");
};

exports.userBoard = (req, res) => {
  res.status(200).send("Welcome Back");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("What's the issue now?");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Again?!?!");
};
