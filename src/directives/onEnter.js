/**
 * Created by Rahul Jujarey on 30-05-2016.
 */
(function () {
    'use strict';

    angular
        .module('angular-utilities')
        .directive('auOnEnter', function () {

            var linkFn = function (scope, element, attrs) {
                element.bind("keypress", function (event) {
                    if (event.which === 13) {
                        scope.$apply(function () {
                            scope.$eval(attrs.auOnEnter);
                        });
                        event.preventDefault();
                    }
                });
            };

            return {
                link: linkFn
            };
        });
})();