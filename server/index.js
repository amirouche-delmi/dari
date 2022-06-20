const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const particulierRoutes = require("./routes/particulier.routes");
const annonce_particulierRoutes = require("./routes/annonce_particulier.routes");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const {
  checkParticulier,
  requireAuth,
} = require("./middleware/auth.middlemare");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// jwt
app.get("*", checkParticulier);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.particulier._id);
});

// routes
app.use("/api/particulier", particulierRoutes);
app.use("/api/annonce_particulier", annonce_particulierRoutes);

// server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
