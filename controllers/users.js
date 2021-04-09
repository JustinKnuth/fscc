// Import bcrypt, jwt, the user schema
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
// db sets up promise to figure out whether we're working locally or on the mongoDB URI
const db = require("../db/connection");

// If there is an error, print it on the console with the preface "MongoDB connection error"
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const SALT_ROUNDS = 11;
const TOKEN_KEY = "brucewillisarmageddonlivtylersadmovie";

// Axios request for signUp
const signUp = async (req, res) => {
  try {
    // Get the username, email, and password from the request body
    const { username, email, password } = req.body;
    // Create the secret key using bcrypt.hash and SALT_ROUNDS
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    // Create the new object to insert into users database
    const user = new User({
      username,
      email,
      password_digest,
    });

    // Save user in database
    await user.save();

    // User info stored in payload
    const payload = {
      username: user.username,
      email: user.email,
    };

    // Add signature to the payload and token key
    const token = jwt.sign(payload, TOKEN_KEY);
    // Respend to user with status code of 201 and the JWT
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Axios call for signIn
const signIn = async (req, res) => {
  try {
    // Pulling out the username and password from the request body
    const { username, password } = req.body;
    // Find the username in the database
    const user = await User.findOne({ username: username });
    // If bcrypt.compare works on password, user.password_digest...
    if (await bcrypt.compare(password, user.password_digest)) {
      // Set up the username and password from database in payload
      const payload = {
        username: user.username,
        email: user.email,
      };
      // Add signature to the payload and token key
      const token = jwt.sign(payload, TOKEN_KEY);
      // Respend to user with status code of 201 and the JWT
      res.status(201).json({ token });
    } else {
      // Do this if the password doesn't match the password_digest in database
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// This axios call helps make sure user doesn't reset to null when a logged in user is perusing the website
const verify = async (req, res) => {
  try {
    // Finds the token in the request header
    const token = req.headers.authorization.split(" ")[1];
    // Checks whether said token matches the token key
    const payload = jwt.verify(token, TOKEN_KEY);
    // If the token and token key match, there will be a payload
    if (payload) {
      res.json(payload);
    }
  } catch (e) {
    res.status(401).send("Not Authorized");
  }
};

const changePassword = async (req, res) => {};

module.exports = {
  signUp,
  signIn,
  verify,
  changePassword,
};
