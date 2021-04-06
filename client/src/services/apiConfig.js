import axios from "axios";

const getToken = () => {
  // Created a promise from scratch
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};

// Create axios call and store in variable api
const api = axios.create({
  baseURL:
    // If the process.env.NODE_ENV is production, use heroku app, otherwise use local
    process.env.NODE_ENV === "production"
      ? "https://fscc-app.herokuapp.com/api"
      : "http://localhost:3000/api",
});

// interceptors is a method that gets every single axios request before it is send out from the React app
// This gets applied to every axios request in the App
api.interceptors.request.use(
  async function (options) {
    // Before any request goes out, we inject the jwt into the header object
    // Make an authorization key that has a result with the token
    options.headers["Authorization"] = await getToken();
    return options;
  },
  function (error) {
    console.log("Request error: ", error);
    return Promise.reject(error);
  }
);

export default api;
