/**
 * Created by Stefan on 12/26/2015.
 */
'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData, $log,$anchorScroll) {


    $scope.snippet = '<span style="color:red"> hi there </span>';
    $scope.boolValue = true;
    $scope.mystyle = {color: 'red'};
    $scope.buttonDisabled = true;
    $scope.sortorder = 'name';

    eventData.getEvent()
        .$promise.then(
        function (event) {
            $scope.event = event;
            $log.info(event);
        }
    ).catch(
        function (response) {
            $log.warn(response);
        }
    );


    $scope.upVoteSession = function (session) {
        session.upVoteCount++;

    };
    $scope.downVoteSession = function (session) {
        session.upVoteCount--;
    };

    $scope.scrollToSession = function(){
      $anchorScroll()
    };


});
