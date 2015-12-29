
'use strict';

eventsApp.controller('LocalSampleController',function LocalSampleController($scope,$locale){

    $scope.myDate = Date.now();
    $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;

    throw {message: 'error message'};


});