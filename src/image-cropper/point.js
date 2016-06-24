
(function (angular, $, mod) {
  'use strict';

  mod.factory('Point', function () {

    function Point(x, y) {
      if (x === void 0) {
        x = 0;
      }
      if (y === void 0) {
        y = 0;
      }
      this.x = x;
      this.y = y;
    }

    Point.prototype.setNext = function (p) {
      this.next = p;
    };
    Point.prototype.getNext = function () {
      return this.next;
    };

    Point.prototype.scale = function(x, y) {
      this.x *= x;
      this.y *= y;
    };

    return Point;
    
  });

})(angular, angular.element, angular.module('angular-img-cropper'));