const express = require("express");

const app = express();
const bodyParser = require("body-parser");

const usersRoutes = require("./routes/users.route");

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.listen(3000, () => {
  console.log("I am ready to listen to you");
});



// const express = require("express");

// const app =
//   express(); /* it will create a server on a specific port and listen continuously without being shut down */ 

// app.use("/test", (req, res) => {
//   console.log("Received request");
//   res.status(200).send("Success");
// }); 

// app.listen(3000, () => {
//   console.log("I am ready to listen to you");
// }); 
