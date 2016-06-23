
(function (angular, $, mod) {
  'use strict';

  mod.factory('PointPool', function (Point) {

    function PointPool(inst) {
      this.borrowed = 0; //for debugging
      PointPool.instance = this;
      var prev = null;
      for (var i = 0; i < inst; i++) {
        if (i === 0) {
          this.firstAvailable = new Point();
          prev = this.firstAvailable;
        }
        else {
          var p = new Point();
          prev.setNext(p);
          prev = p;
        }
      }
    }

    PointPool.prototype.borrow = function (x, y) {
      if (this.firstAvailable == null) {
        throw "Pool exhausted";
      }
      this.borrowed++;
      var p = this.firstAvailable;
      this.firstAvailable = p.getNext();
      p.x = x;
      p.y = y;
      return p;
    };
    PointPool.prototype.returnPoint = function (p) {
      this.borrowed--;
      p.x = 0;
      p.y = 0;
      p.setNext(this.firstAvailable);
      this.firstAvailable = p;
    };
    return PointPool;

  });

})(angular, angular.element, angular.module('angular-img-cropper'));