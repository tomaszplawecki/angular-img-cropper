
(function (angular, $, mod) {
  'use strict';
  
  mod.factory('Handle', function (Point) {

    function Handle(x, y, radius) {
      this.over = false;
      this.drag = false;
      this.position = new Point(x, y);
      this.offset = new Point(0, 0);
      this.radius = radius;
    }

    Handle.prototype.setDrag = function (value) {
      this.drag = value;
      this.setOver(value);
    };
    Handle.prototype.draw = function (ctx) {
    };
    Handle.prototype.setOver = function (over) {
      this.over = over;
    };
    Handle.prototype.touchInBounds = function (x, y) {
      return (x > this.position.x - this.radius && x < this.position.x + this.radius && y > this.position.y - this.radius && y < this.position.y + this.radius);
    };
    Handle.prototype.getPosition = function () {
      return this.position;
    };
    Handle.prototype.setPosition = function (x, y) {
      this.position.x = x;
      this.position.y = y;
    };
    
    return Handle;
  });

})(angular, angular.element, angular.module('angular-img-cropper'));