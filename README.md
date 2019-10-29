# Angisa Tori
Discover the secrets behind the Surinamese headscarves.

<img src="https://oege.ie.hva.nl/~westere6/techtrack/angisa.jpg" alt="logo">

## Concept
The angisa is a typical Surinamese garment. This headpiece is considered the most important part of Surinamese Creole costume and is much more than a beautiful functional headpiece. Certain folding techniques result in artistic main creations with corresponding names and messages. The angisa brings many stories, traditions and wisdoms with it. This headscarf functioned as a means of communication during colonial rule and contained hidden messages about the wearer. Wearing the angisa allowed the wearer to communicate non-verbally with her environment, for example about her state of mind, her love and social position. By drawing attention to the different types of Surinamese canvases, I want to connect the colonial past of the Netherlands with the visitors of The National Museum of World Cultures. By means of an interactive application I want to reveal the message behind different angisa canvases.

<img src="https://oege.ie.hva.nl/~westere6/techtrack/herdenkingsstof.jpg" alt="herdenkingsstof">

## Target audience of application
The application is for anyone who is interested in the slavery history of Suriname.

## Data usage
Data used within the application comes from the NMVW. The NMVW makes the data available and will be used to read object information that is related to Surinamese clothing.

## Data processing
Through SparQL queries (RDF-based data) searches will be requested. With this technique it is possible to request certain information from the collection of world cultures.

```
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX dc: <http://purl.org/dc/elements/1.1/>
        PREFIX dct: <http://purl.org/dc/terms/>
        PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
        PREFIX edm: <http://www.europeana.eu/schemas/edm/>
        PREFIX foaf: <http://xmlns.com/foaf/0.1/>

        SELECT ?cho ?title ?placeName ?type ?createdDate ?imageLink WHERE {
            <https://hdl.handle.net/20.500.11840/termmaster5986> skos:narrower* ?place .
            ?place skos:prefLabel ?placeName .

            VALUES ?type { "Hoofddoek" "hoofddoek" "Angisa" "angisa" "Headgear" "headgear" "hoofddeksel" "Hoofddeksel" "Hoofddeksels" "hoofddeksels"}

            ?cho dct:spatial ?place.
            ?cho dc:title ?title.
            ?cho dct:created ?createdDate.
            ?cho foaf:depiction ?imageLink.
            ?cho dc:type ?type .
                FILTER langMatches(lang(?title), "ned")
        }
        LIMIT 20
```
## Features
...

## Wiki
Lees [wiki](https://github.com/EyobDejene/frontend-applications/wiki) voor het gehele process. 

## Live version
Link to application []

## Prerequisites
You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd angisa-project`
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

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
