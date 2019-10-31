# Angisa Tori
Discover the secrets behind the Surinamese headscarves.<br>
This application will show you the meaning of a certain angisa.

<img src="https://oege.ie.hva.nl/~westere6/techtrack/angisa.jpg" alt="logo">

## Concept
The angisa is a typical Surinamese garment. This headpiece is considered the most important part of Surinamese Creole costume and is much more than a beautiful functional headpiece. Certain folding techniques result in artistic main creations with corresponding names and messages. The angisa brings many stories, traditions and wisdoms with it. This headscarf functioned as a means of communication during colonial rule and contained hidden messages about the wearer. Wearing the angisa allowed the wearer to communicate non-verbally with her environment, for example about her state of mind, her love and social position. By drawing attention to the different types of Surinamese canvases, I want to connect the colonial past of the Netherlands with the visitors of The National Museum of World Cultures. By means of an interactive application I want to reveal the message behind different angisa canvases.
[Read more](https://github.com/EyobDejene/frontend-applications/wiki/1.1-Concept)

<img src="https://oege.ie.hva.nl/~westere6/techtrack/concept1.jpg" alt="concept">

## Live demo
[You can find the live demo here](https://tropenmuseum.herokuapp.com/headscarves)

## Target audience of application
The application is for anyone who is interested in the slavery history of Suriname.

## Data usage &  processing
Data used within the application comes from the NMVW. The NMVW makes the data available and will be used to read 
object information that is related to Surinamese headscarves.

Through SparQL queries (RDF-based data) searches will be requested. With this technique it is possible to request certain information from the collection of world cultures.
[Read more](https://github.com/EyobDejene/frontend-applications/wiki/2.1-Sparql-Query#data-usage)

## Features
* Filter based on category


## Code snippets
* [How data fetch works](https://github.com/EyobDejene/frontend-applications/wiki/3.0-Code-snippets#how-data-fetch-works)
* [How headscarves get rendered](https://github.com/EyobDejene/frontend-applications/wiki/3.0-Code-snippets#how-headscarves-get-rendered)
* [How the filter function works](https://github.com/EyobDejene/frontend-applications/wiki/3.0-Code-snippets#how-the-filter-function-works)


## Personal progression

* Setup a framework
* Understanding routes
* Understanding components
* Storing data in localstorage
* Using fetch to call API GET request
* Reading documentation of a framework
* Searching the internet for answers


## Have yet to learn

* Ember.js usage of the controller
* Ember.js usage of the model 
* Ember.js usage of the adapter
* Ember.js usage of serializers


## Wiki
Read [wiki](https://github.com/EyobDejene/frontend-applications/wiki) For the whole process. 



## Prerequisites
You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd frontend-applications`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying
* [Deploy your app on heroku](https://devcenter.heroku.com/articles/git)
* [Ember Heroku buildpack](https://www.heroku.com/emberjs)

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Acknowledgements/credits
*  Helping with data fetch in Ember [Nick](https://github.com/CountNick)
*  Component linking to template in Ember [Chazz](https://github.com/Chazzers/) & [Nick](https://github.com/CountNick)