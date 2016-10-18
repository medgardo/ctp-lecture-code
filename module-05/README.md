# Module 04 - Lecture Code

In lecture we did 4 live coding sessions that built on where we left off in module 03. The 4 sessions are explained below: 

## Before running each session

You will have to run `npm install` within each session folder prior to running the app.

## 01 - Add Handlebars and Create Author View Templates

In the last lecture, we created Author entries using a `GET` request. That was **NOT RESTful** of me. We should instead present the users of our webapp a form where the necessary data can be entered. Before we can do that, we should add a templating engine, so let's do that now:

1. First, add Express-Handlebars to the project
    * `npm install --save express-handlebars`
2. Update the project to make use of the handlebars engine
    * see `app.js`
3. Create view directories
    * Create `views`, `views/layouts`, and `views/authors`
4. Create the `main` layout
    * see `views/layouts/main.handlebars`

Now that handlebars is being used as our view engine, we want to make use of it. We'll start by changing out Author listing page [http://localhost:8000/authors](http://localhost:8000/authors) to use a view template instead:

1. See `controllers/authors.js`
    * We switch from using `res.send` to `res.render`
    * Note that the second parameter is an object of variables that should be available to the view template
2. See `views/authors/list.handlebars`
    * Note we only need the HTML contents that will replace the `{{{ body }}}` variable in the main layout.
    * We use the `{{#each }}` expression to iterate over each author
3. See the view in action [http://localhost:8000/authors](http://localhost:8000/authors)

_Handlebars Template Documentation_: [http://handlebarsjs.com/](http://handlebarsjs.com/)

## 02 - Add an Author Form and process it with a POST request

Now that our templating language is working, let's create a form so that users can create Author's. 

1. Before we build the form, add the body-parse package
    * `npm install --save body-parser`
    * The body-parser simplifies working with POST request input data
2. Add the body-parser middleware
    * See `app.js`
3. Create the form
    * see `views/authors/new.handlebars`
    * Note: the form uses `method="post"`
4. Update the Author controller
    * First, remove the old `/new/....` get route.
    * Add a `GET /new` route to display the form
    * Add a `POST /` route to process submitted forms

## 03 - Add a Unit Test for the Author Model

Our last version has one _major_ problem. We can submit empty forms, and they are saved to the database! We actually want to ensure that all authors have a `first_name`, `last_name`, and a `bio`.

Where should we add those checks? We should add them to both the front-end and back-end. But first, let's add some tests so that we can check for good and bad inputs. 

* Write the tests
    - See `tests/models/author.js`
    - Here we check that the model contains some basic properties,
    - And we check that we can't create users with bad data
* Run the tests
    - `npm test`
    - They **fail**! Good, Let's make them pass.

Okay, so the tests are failing. We need to update our app so that these tests fail.

* Add data validation code to the model
    - See `models/author.js`
* Run the tests again
    - They **pass**!


_Sequelize Validation Documentation:_ [http://docs.sequelizejs.com/en/latest/docs/models-definition/#validations](http://docs.sequelizejs.com/en/latest/docs/models-definition/#validations)

_Chai expect Documentation:_ [http://chaijs.com/api/bdd/](http://chaijs.com/api/bdd/)

## 04 - Add better Form errors

We now have a problem. The application does not allow bad data to be saved, but how do we inform the webapp user?

* We update the form view template so that it now informs the user about errors encountered.
    - See `views/authors/new.handlebars`
    - See `controllers/authors.js`


