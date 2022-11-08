//impore express
const express = require("express");
//create web server using the express return value
const app = express();

//add a json parser to the web server
app.use(express.json());

//adding a post route to the web server
app.post("/", (req, res) => {
  //POST is CREATE - POSTING information to my API
  console.log(req.body.name);
  //User.create(req.body)
  res.sendStatus(200);
});

//adding a get route to the web server
app.get("/:name", (request, response) => {
  //GET is READ - GETTING information from my API
  //GET cannot recieve body
  console.log(req.params.name);
  res.send({ name: req.params.name });
});

//adding a patch route to the web server
app.patch("/", (req, res) => {
  //PATCH is UPDATE - PATCHING part of an item in my API
});

//adding a put route to the web server
app.put("/", (req, res) => {
  //PUT is UPDATE - PUTTING something new in the place of something old
});

//adding a delete route to the web server
app.delete("/:id", (req, res) => {
  //DELETE is DELETE - DELETE information from my API
  //DELETE cannot recieve body
  //User.destroyByPk(req.params.id)
  res.sendStatus(200);
});

//listen on a port
app.listen(5001, () => {
  console.log("Listening on port 5001");
});
