export const allGames = (req, res) => {
  return res.send("desde el controlador");
};

export const gamesbyID = (req, res) => {
  return res.send(`desde el controlador con la id ${req.params}`);
};
