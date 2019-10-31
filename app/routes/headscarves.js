import Route from '@ember/routing/route';
import fetch from "fetch";




export default Route.extend({

    model() {

        // const instruments = {
        //     "title":"hoofdoek1", "createdDate":"1960", "imageLink":"foto.jpg"
        // }
        // console.log(instruments);
        // return instruments;

        // setup api url and query
        const url =    'https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-27/sparql';
        const query = `
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
        `;

        let categories = ["slavery","celebration","danger","emotion"];
        let dummyDescription = "The angisa is a typical Surinamese garment. This headgear is the most important part of Surinamese Creole costume and is much more than a beautiful or functional headgear. Certain folding techniques result in artistic main creations with corresponding names and messages. The angisa brings many stories, traditions and wisdoms with it. This headscarf functioned as a means of communication during colonial rule and contained hidden messages about the wearer. Wearing the angisa allowed the wearer to communicate non-verbally with her environment, for example about her state of mind, her love and social position.";
        //let images = ["flag1.png","flag2.png","flag3.png","flag4.png"];


        // handle data
        const handleData = (json) =>{
            let bindings =  json.results.bindings;
            for (let i=0; i < bindings.length; i++){
                var num = Math.floor( Math.random() * categories.length );
                let objectItem = bindings[i];
                objectItem.id = i;
                objectItem.category = categories[num];
                objectItem.cho = objectItem.cho.value;
                objectItem.description = dummyDescription;
                objectItem.placeName = objectItem.placeName.value;
                objectItem.title = objectItem.title.value;
                objectItem.type = objectItem.type.value;
                objectItem.createdDate = objectItem.createdDate.value;
                // objectItem.description = objectItem.description.value;
                objectItem.imageLink = objectItem.imageLink.value;
            }
            localStorage.setItem('museum_objects', JSON.stringify(bindings));
            return bindings
        };

        // check if object found in localstorage
        if(localStorage.getItem('museum_objects') ===  null){
            // fetch data
            return fetch(url+'?query='+encodeURIComponent(query)+'&format=json')
                .then(res => res.json())
                .then(handleData)
                .catch(err => console.error(err));
        }else{
            // return the objects
            console.log('object bestaat');
            return JSON.parse(localStorage.getItem('museum_objects'));
        }



    }

});
