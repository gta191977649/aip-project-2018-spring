// @import Project Components
import isEmpty from "./isEmpty";

// env.REACT_APP_CATEGORIES will be empty so this is just an example.
export const CATEGORIES = isEmpty(process.env.REACT_APP_CATEGORIES) // Check if env variable is empty
  ? ["Clothes", "Electronics", "Software", "Toys"] // Defined default value if empty
  : process.env.REACT_APP_CATEGORIES; // If not empty then assign the const the environment variable

// Added more constants here like error messages etc (think Mobile Applications Development)
// you can grab environment variables from .env by prefixing the variable with react_app_ in the .env
// Example: REACT_APP_API_URL=http://localhost:3000
// You can then reference said ENV variables here
// Example const PROD_API_URL = process.env.REACT_APP_API_URL

export const REGISTER_SECCUESS = "Registration successful! Please login!";
export const LOGOUT_SUCCESS = "Logged out!";
export const CLEAR_CART = "Cleared your card!";
export const ADD_ITEM_CART = "Added product to cart!";
export const SERVER_API_ERROR = "Server Error: No connection to API Server could be made!";
export const IMAGE_ERROR = "You need to add an image!";