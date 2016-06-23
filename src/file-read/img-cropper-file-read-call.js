
(function (angular, $, mod) {
  'use strict';

  mod.directive('imgCropperFilereadCall', function factory() {
    return {
      scope: {
        control: '='
      },
      link: function (scope) {
        scope.internalControl = scope.control || {};
        scope.internalControl.load = function (elem) {

          var elemental = angular.element(document.querySelector(elem));
          var ev = document.createEvent("MouseEvent");
          ev.initEvent("click", true, false);
          elemental[0].dispatchEvent(ev);
        };
      }
    };
  });

})(angular, angular.element, angular.module('angular-img-cropper'));