'use strict';

angular.module('health').directive('randomQuotes', [
    function() {
        return {
            restrict: 'E',
            scope: {
                quotesList: '='
            },
            templateUrl: '/app/views/randomQuotes.html',
            controller: ['$scope', function($scope) {
                var vm = this;
                $scope.$watch('quotesList', function (newQuotesList) {
                    this.quotesList = newQuotesList;
                    vm.getRandomQuotes();
                }.bind(this));

                vm.getRandomQuotes = function() {
                    vm.quoteToDisplay = vm.quotesList[Math.floor(Math.random() * vm.quotesList.length)];
                };
            }],
            controllerAs: 'vm'
        };
    }
]);