angular.module('health').directive('activityRound', function() {

    return {
        restrict: 'E',
        scope: {
            activitiesJson: '='
        },
        templateUrl: '/app/views/activitiesDirective.html'
    }
});