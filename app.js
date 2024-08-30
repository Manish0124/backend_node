import express, { application } from "express";

const app = express();
app.use(express.json());

function func1(req, res, next) {
  // user authentication
  let userAuth = !false;
  console.log("i am running and chcking userauth");
  if (userAuth) {
    next();
  } else {
    res.status(404).send({ message: "no user found" });
  }
  console.log("break");
}

function func2(req, res) {
  // db operation
  res.send({ message: "message from func2" });
}

app.post("/", func1, func2);

app.get("/user/:username/:password", (req, res) => {
  // chech here
  const param = req.params;
  res.send({
    password: param.password,
    profile: param.username,
  });
});

app.get("/search", (req, res) => {
  const query = req.query;
  res.send({ query });
});

export default app;
