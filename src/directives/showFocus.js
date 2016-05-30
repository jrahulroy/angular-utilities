/**
 * Created by Rahul Jujarey on 30-05-2016.
 */
(function () {
    'use strict';

    angular
        .module('angular-utilities')
        .directive('auShowFocus', function ($timeout) {
            return function (scope, element, attrs) {
                if (attrs.hasOwnProperty('auShowFocus') && attrs.showFocus != 'false') {
                    $timeout(function () {
                        element.focus();

                        if ($(element).find('.focus-target')[0]) {
                            $(element).find('.focus-target')[0].focus();
                        }

                    });
                }
            }
        });
})();