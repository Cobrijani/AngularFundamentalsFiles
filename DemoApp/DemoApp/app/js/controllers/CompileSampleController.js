
eventsApp.controller('CompileSampleController',function($scope,$compile,$parse,$log){


    var fn = $parse('1 + 2');
    $log.info(fn());


    var getter = $parse('event.name');

    var context1 = {event: {name: 'AngularJS Boot Camp'}};
    var context2 = {event: {name: 'Code Camp'}};

    $log.info(getter(context1));
    $log.info(getter(context2));

    $log.info(getter(context2,context1));

    var setter = getter.assign;

    setter(context2,'Code Retreat');

    $log.info(getter(context2));

    $scope.appendToDivElement = function(markup){
        return $compile(markup)($scope).appendTo(angular.element("#appendHere"))
    }

});