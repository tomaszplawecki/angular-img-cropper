
(function (angular, $, mod) {
  'use strict';

  mod.factory('CropTouch', function () {
    function CropTouch(x, y, id) {
      if (x === void 0) {
        x = 0;
      }
      if (y === void 0) {
        y = 0;
      }
      if (id === void 0) {
        id = 0;
      }
      this.id = 0;
      this.x = x;
      this.y = y;
      this.id = id;
    }

    return CropTouch;
  });

})(angular, angular.element, angular.module('angular-img-cropper'));