# Project Overview

## Full Stack Coffee Co.

#### URL

[Full Stack Coffee Co.](https://fullstackcoffee.netlify.app/)

## Project Overview

Full Stack Coffee Co. is a an online e-commerce distributor of coffee machines for the home barista. It is built using React.js on the front-end and Express/MongoDB on the back-end. Users can sign up and log in to add or edit their favorite coffee tools. The home screen features a carousel of coffee-related images and a list of brands. The products screen lists inventory items with links to more details about each product.

## Wireframes

[Full Stack Coffee Co. Wireframes](https://xd.adobe.com/view/2aafdb4c-d8ee-43c8-a2e4-7da9a868d763-7ffc/)

## Github Project Page

[Github Project Page](https://github.com/JustinKnuth/fscc/projects)

## Schema

``` .json
const Product = new Schema
{
    name: { type: String, required: true },
    price: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true }

}

const User = new Schema
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true }
  }
```


## Whimsical Diagram

  [Link to whimsical diagram](https://whimsical.com/full-stack-coffee-co-KEu9CGnX5UZUkVeXmNbWjC)

## Team Expectations 

  [Team Expectations](https://docs.google.com/document/d/e/2PACX-1vRAsoE8jW6tQSaWdJRNtPk5LO_ABWQjP6Vjg0xwR92sHvPpHkBKjbPAgT1fK5p0jCGHhtij0sWi4knl/pub)

## MVP/PostMVP

#### MVP 

- React App with understandable file structure and full CRUD
- Structure website(jsx) in a clean and readable fashion
- Style website(CSS) using flex-box and grid
- Create an API using Express
- Utilize a MongoDB database to store products in the back-end
- Create an authentication feature for the site
- Make all links and buttons clickable with DRY code

#### PostMVP  

- Add a shopping cart feature
- Create a 'popular items' carousel
- Additional page for coffee beans
- Produce a separate page for brew-method instructions
- Allow users to leave a review and give feedback
- Make buttons that link to popular brand websites

## Comments
Paul Moschetti
Molly Exten
Dylan Ross
Justin Knuth

