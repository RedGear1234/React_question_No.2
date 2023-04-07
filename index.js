const express = require("express");
const app = express();
app.use(express.json());

function authenticateUser(username, password) {
  const vaildUserName = "shubham";
  const vaildPassword = "1234";
  return username === vaildUserName && password === vaildPassword;
}

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const auth = authenticateUser(username, password);

  if (auth) {
    res.json({ valid: true });
  } else {
    res.json({ valid: false });
  }
});

app.listen("3000", () => {
  console.log(`listing on port 3000`);
});
