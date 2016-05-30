/**
 * Created by Rahul Jujarey on 03-03-2016.
 */
(function () {
    'use strict';

    angular
        .module('angular-utilities', [])

})();
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
/**
 * Created by Rahul Jujarey on 03-03-2016.
 */
(function () {
    'use strict';

    angular
        .module('angular-utilities')
        .filter('auPadZerosInFront', function () {
            return function (number, digits) {
                if (number) {
                    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
                } else {
                    return '';
                }
            };
        });

})();
