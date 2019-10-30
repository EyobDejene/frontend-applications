import Route from '@ember/routing/route';

export default Route.extend({

    model: function(params) {
        var object_id = params.id;
        var getObject = JSON.parse(localStorage.getItem('museum_objects'));


        //return this.store.findRecord('headscarf', params.id);
      //  console.log(this.store.findRecord('headscarf', params.id));
        console.log('single page');
        console.log(object_id);
        //console.log(getObject);
        console.log(getObject[object_id]);
        return(getObject[object_id]);



    }


});
