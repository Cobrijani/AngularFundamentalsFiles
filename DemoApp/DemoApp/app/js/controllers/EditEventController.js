/**
 * Created by Stefan on 12/28/2015.
 */

'use strict';

eventsApp.controller('EditEventController', function EditEventController($scope,eventData,$log,$window) {


    $scope.saveEvent = function (event,newEventForm) {
        console.log(newEventForm);
        if(newEventForm.$valid){
            eventData.save(event).$promise
                .then(function (response) { $log.info(response)},
                    function (response) { $log.warn(response)}
                );
        }


    };

    $scope.cancelEdit = function () {
        $window.location = "/EventDetails.html";
    }

});
