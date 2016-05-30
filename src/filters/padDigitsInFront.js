/**
 * Created by Rahul Jujarey on 03-03-2016.
 */
(function () {
    'use strict';

    angular
        .module('angular-utilities')
        .filter('padDigitsInFront', function () {
            return function (number, digits) {
                if (number) {
                    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
                } else {
                    return '';
                }
            };
        });

})();
