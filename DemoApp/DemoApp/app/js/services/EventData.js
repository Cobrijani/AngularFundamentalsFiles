/**
 * Created by Stefan on 12/28/2015.
 */

eventsApp.factory('eventData',function($resource){

    var rsrc = $resource('/data/event/:id', {id:'@id'});
   return {
        getEvent: function(){
          return rsrc.get({id:1});
        },
       save: function (event) {
           event.id = 99;
           return rsrc.save(event);
       }
   };
});
